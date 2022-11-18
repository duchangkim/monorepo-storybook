import { Login } from '@duse/projects/duse/example/pc/pages/login';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Login />} />
    </ReactRouterRoutes>
  );
}
