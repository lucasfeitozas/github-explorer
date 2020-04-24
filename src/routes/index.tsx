import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

interface Props {
  toggleTheme(): void;
}
// const Routes: React.FC = () => (

function Routes({ toggleTheme }: Props): React.ReactElement {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => <Dashboard toggleTheme={toggleTheme} />}
      />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  );
}
export default Routes;
