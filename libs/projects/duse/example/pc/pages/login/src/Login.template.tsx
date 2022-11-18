import './Login.scss';

export interface LoginTemplateProps {
  children: React.ReactNode;
}

export const LoginTemplate = function LoginTemplateFunctionComponent({ children }: LoginTemplateProps) {
  return (
    <>
      <header>header</header>
      <main className="login-page">
        <div className="center">{children}</div>
      </main>
      <footer>footer</footer>
    </>
  );
};
