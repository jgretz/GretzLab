import React from 'react';
import {Switch, Route} from 'react-router';

import NotFound from './notFound';

// import {ROUTES} from '../constants';

export default () => (
  <Switch>
    <Route component={NotFound} />
  </Switch>
);
