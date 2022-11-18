import { loginController } from '@duse/projects/duse/example/pc/features/auth';
import { LoginForm } from '@duse/projects/duse/example/pc/ui/login-form';
import { LoginTemplate } from './Login.template';

import './Login.scss';

export function Login() {
  const handleLoginFormSubmit = () => {
    window.alert('로그인 폼 서브밋');
    loginController();
  };

  return (
    <LoginTemplate>
      <LoginForm handleSubmit={handleLoginFormSubmit} />
      <h1>test017</h1>
      <h2>영향을 받는 프로젝트는 duse-example-pc</h2>
    </LoginTemplate>
  );
}
