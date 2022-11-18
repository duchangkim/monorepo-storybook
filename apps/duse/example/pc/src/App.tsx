import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './router';

import './App.scss';

const App = function AppFunctionComponent() {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;