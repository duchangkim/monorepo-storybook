import { render } from '@testing-library/react';

import { TextField } from './TextField';

describe('UIComponent TextField', () => {
  it('성공적으로 렌더링 되었는가?', () => {
    const { baseElement } = render(<TextField />);

    expect(baseElement).toBeTruthy();
  });
});
