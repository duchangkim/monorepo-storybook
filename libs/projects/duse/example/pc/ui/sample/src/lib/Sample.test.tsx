import { render } from '@testing-library/react';

import ProjectsDuseExamplePcUiSample from './Sample';

describe('ProjectsDuseExamplePcUiSample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsDuseExamplePcUiSample />);
    expect(baseElement).toBeTruthy();
  });
});
