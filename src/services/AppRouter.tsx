import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Help = React.lazy(() => import('../pages/Home/Help/Help'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Help} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
