import React from 'react';
import { Switch, Route } from 'react-router-dom';

import General from '../pages/General';
import Reading from '../pages/Reading';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={General} />
    <Route path="/reading" exact component={Reading} />
  </Switch>
);

export default Routes;
