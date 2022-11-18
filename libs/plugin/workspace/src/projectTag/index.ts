export const TYPE_TAG_PREFIX = 'type:';

export const CORE_TAG_PREFIX = 'core:';

export const PROJECT_TYPE = {
  none: 'none',
  pages: 'pages',
  features: 'features',
  store: 'store',
  service: 'service',
  ui: 'ui',
  util: 'util',
  vendor: 'vendor',
  constant: 'constant',
  type: 'type',
} as const;

export const PROJECT_TAG = {
  pages: `${TYPE_TAG_PREFIX}feature`,
  features: `${TYPE_TAG_PREFIX}feature`,
  store: `${TYPE_TAG_PREFIX}service`,
  service: `${TYPE_TAG_PREFIX}service`,
  ui: `${TYPE_TAG_PREFIX}ui`,
  util: `${TYPE_TAG_PREFIX}util`,
  vendor: `${TYPE_TAG_PREFIX}util`,
} as const;

export type PROJECT_TYPE = typeof PROJECT_TYPE[keyof typeof PROJECT_TYPE];
export type PROJECT_TAG = typeof PROJECT_TAG[keyof typeof PROJECT_TAG];
