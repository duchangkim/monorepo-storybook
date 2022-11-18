import { offsetFromRoot } from '@nrwl/devkit';

export function getRelativePathToRootTsConfig(targetPath: string): string {
  const rootTsConfigFileName = 'tsconfig.base.json';

  return offsetFromRoot(targetPath) + rootTsConfigFileName;
}
