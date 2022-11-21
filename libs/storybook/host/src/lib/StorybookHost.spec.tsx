import { render } from '@testing-library/react';

import StorybookHost from './StorybookHost';

describe('StorybookHost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHost />);
    expect(baseElement).toBeTruthy();
  });
});
