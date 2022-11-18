import { getRelativePathToRootTsConfig } from '../../src/utils';

test('targetPath로 부터 tsconfig.base.json의 상대 경로를 반환해야 합니다.', () => {
  const targetPath = 'libs/my-lib/feature/';

  expect(getRelativePathToRootTsConfig(targetPath)).toBe('../../../tsconfig.base.json');
});
