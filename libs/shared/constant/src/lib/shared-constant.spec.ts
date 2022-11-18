import { sharedConstant } from './shared-constant';

describe('sharedConstant', () => {
  it('should work', () => {
    expect(sharedConstant()).toEqual('shared-constant');
  });
});
