import { render } from '@testing-library/react';

import { LoginForm } from './LoginForm';

describe('UIComponent LoginForm', () => {
  it('성공적으로 렌더링 되었는가?', () => {
    const onSubmit = jest.fn();
    const { baseElement } = render(<LoginForm handleSubmit={onSubmit} />);

    expect(baseElement).toBeTruthy();
  });
});
