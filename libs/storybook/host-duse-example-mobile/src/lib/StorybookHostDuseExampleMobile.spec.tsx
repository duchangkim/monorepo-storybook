import { render } from '@testing-library/react';

import StorybookHostDuseExampleMobile from './StorybookHostDuseExampleMobile';

describe('StorybookHostDuseExampleMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookHostDuseExampleMobile />);
    expect(baseElement).toBeTruthy();
  });
});
