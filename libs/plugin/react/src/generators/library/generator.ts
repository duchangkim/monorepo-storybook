import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  GeneratorCallback,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  offsetFromRoot,
  Tree,
  updateProjectConfiguration,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { lintProjectGenerator, Linter } from '@nrwl/linter';
import { jestProjectGenerator } from '@nrwl/jest';
import * as path from 'path';
import {
  getProjectDefaultTagList,
  getRelativePathToRootTsConfig,
  hasProjectDefaultTagList,
  PROJECT_LIBRARY_FOLDER_NAME,
  runTasksInSerial,
} from '@duse/workspace';
import { ReactLibraryGeneratorSchema } from './schema';

interface NormalizedSchema extends ReactLibraryGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  fileName: string;
  cssClassName: string;
}

function convertToPascalCase(string: string) {
  return names(string).className;
}

function getProjectDirectory(libraryType: string, projectName: string, name: string) {
  const projectMiddleDiretory = hasProjectDefaultTagList(libraryType) ? libraryType : '';
  const libraryFolderName = libraryType === name ? '' : name;

  return joinPathFragments(
    PROJECT_LIBRARY_FOLDER_NAME,
    projectName.replace(/-/g, '/'),
    projectMiddleDiretory,
    libraryFolderName,
  );
}

function normalizeOptions(tree: Tree, options: ReactLibraryGeneratorSchema): NormalizedSchema {
  const { libraryType } = options;

  const defaultTags = getProjectDefaultTagList(libraryType);
  const fileName = convertToPascalCase(options.name);
  const name = names(options.name).fileName;
  const projectDirectory = getProjectDirectory(libraryType, options.projectName, name);
  const projectName = projectDirectory.replace(/\//g, '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags
        .split(',')
        .map((s) => s.trim())
        .concat(defaultTags)
    : defaultTags;

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    fileName,
    libraryType,
    cssClassName: name,
  };
}

function addFiles(tree: Tree, normalizedOptions: NormalizedSchema) {
  const templateOptions = {
    ...normalizedOptions,
    ...names(normalizedOptions.name),
    fileName: normalizedOptions.fileName,
    offsetFromRoot: offsetFromRoot(normalizedOptions.projectRoot),
    rootTsConfigPath: getRelativePathToRootTsConfig(normalizedOptions.projectRoot),
    template: '',
    dot: '.',
    cliCommand: 'nx',
  };

  generateFiles(tree, path.join(__dirname, 'files/template'), normalizedOptions.projectRoot, templateOptions);
}

function addProject(tree: Tree, normalizedOptions: NormalizedSchema) {
  const isStandaloneProject = true;

  addProjectConfiguration(
    tree,
    normalizedOptions.projectName,
    {
      root: normalizedOptions.projectRoot,
      projectType: 'library',
      sourceRoot: joinPathFragments(normalizedOptions.projectRoot, 'src'),
      targets: {
        lint: {
          executor: '@nrwl/linter:eslint',
        },
      },
      tags: normalizedOptions.parsedTags,
    },
    isStandaloneProject,
  );
}

async function addJest(tree: Tree, normalizedOptions: NormalizedSchema): Promise<GeneratorCallback> {
  return await jestProjectGenerator(tree, {
    ...normalizedOptions,
    project: normalizedOptions.projectName,
    setupFile: 'none',
    supportTsx: true,
    babelJest: true,
    skipSerializers: true,
    testEnvironment: 'jsdom',
    skipFormat: true,
  });
}

function addEsLint(tree: Tree, normalizedOptions: NormalizedSchema): Promise<GeneratorCallback> {
  return lintProjectGenerator(tree, {
    project: normalizedOptions.projectName,
    linter: Linter.EsLint,
    skipFormat: true,
    tsConfigPaths: [joinPathFragments(normalizedOptions.projectRoot, 'tsconfig.lib.json')],
  });
}

function updateProjectEsLintConfiguration(tree: Tree, normalizedOptions: NormalizedSchema) {
  const projectConfiguration = readProjectConfiguration(tree, normalizedOptions.projectName);
  projectConfiguration.targets.lint.options = {
    fix: true,
    cache: true,
    eslintConfig: joinPathFragments(normalizedOptions.projectRoot, '.eslintrc.json'),
    lintFilePatterns: [`${normalizedOptions.projectRoot}/**/*.{ts,json}`],
  };

  updateProjectConfiguration(tree, normalizedOptions.projectName, projectConfiguration);
}

async function libraryGenerator(tree: Tree, options: ReactLibraryGeneratorSchema) {
  const tasks: GeneratorCallback[] = [];
  const normalizedOptions = normalizeOptions(tree, options);

  addFiles(tree, normalizedOptions);
  addProject(tree, normalizedOptions);
  const esLintCallback = await addEsLint(tree, normalizedOptions);
  const jestCallback = await addJest(tree, normalizedOptions);
  await formatFiles(tree);

  tasks.push(esLintCallback, jestCallback);

  updateProjectEsLintConfiguration(tree, normalizedOptions);

  return runTasksInSerial(...tasks);
}

export default libraryGenerator;
