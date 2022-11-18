import { render } from '@testing-library/react';

import { SampleBadge } from './SampleBadge';

describe('UIComponent SampleBadge', () => {
  it('성공적으로 렌더링 되었는가?', () => {
    const { baseElement } = render(<SampleBadge />);

    expect(baseElement).toBeTruthy();
  });
});
