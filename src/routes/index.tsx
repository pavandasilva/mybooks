import React from 'react';
import { Switch, Route } from 'react-router-dom';

import General from '../pages/General';
import Detail from '../pages/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={General} />
    <Route path="/detail" component={Detail} />
  </Switch>
);

export default Routes;
