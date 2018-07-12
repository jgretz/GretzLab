import React from 'react';
import {Switch, Route} from 'react-router';

import NotFound from './notFound';
import {Table} from '../../lab/components';

import {ROUTES} from '../constants';

export default () => (
  <Switch>
    <Route exact path={ROUTES.home.route} component={Table} />
    <Route component={NotFound} />
  </Switch>
);
