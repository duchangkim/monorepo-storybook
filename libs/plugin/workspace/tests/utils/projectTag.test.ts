import { getProjectDefaultTagList, hasProjectDefaultTagList } from '../../src/utils';

describe('hasProjectDefaultTagList', () => {
  it('라이브러리 타입에 맞는 태그가 존재한다면 true를 반환해야 합니다.', () => {
    expect(hasProjectDefaultTagList('pages')).toEqual(true);
  });

  it('라이브러리 타입에 맞는 태그가 없다면 false를 반환해야 합니다.', () => {
    expect(hasProjectDefaultTagList('none')).toEqual(false);
  });
});

describe('getProjectDefaultTagList', () => {
  it('라이브러리 타입에 맞는 태그가 존재한다면 해당 태그를 요소로 가지는 배열을 반환해야 합니다.', () => {
    expect(getProjectDefaultTagList('pages')).toContain('type:feature');
  });

  it('라이브러리 타입에 맞는 태그가 존재하지 않는다면 빈 배열을 반환해야 합니다.', () => {
    expect(getProjectDefaultTagList('none').length).toBe(0);
  });
});
