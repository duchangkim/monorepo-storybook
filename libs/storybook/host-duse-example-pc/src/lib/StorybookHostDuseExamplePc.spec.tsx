import { render } from '@testing-library/react';

import StorybookHostDuseExamplePc from './StorybookHostDuseExamplePc';

describe('StorybookHostDuseExamplePc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHostDuseExamplePc />);
    expect(baseElement).toBeTruthy();
  });
});
