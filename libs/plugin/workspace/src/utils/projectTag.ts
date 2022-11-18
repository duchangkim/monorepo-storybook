import { PROJECT_TAG } from '../projectTag';

export function hasProjectDefaultTagList(libraryType: string): boolean {
  return !!PROJECT_TAG[libraryType];
}

export function getProjectDefaultTagList(libraryType: string): PROJECT_TAG[] {
  if (!hasProjectDefaultTagList(libraryType)) {
    return [];
  }

  return [PROJECT_TAG[libraryType]];
}
