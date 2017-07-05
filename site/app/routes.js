import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './App';
import {Home} from './features/home/components';
import {Lab} from './features/lab/components';
import {NotFound} from './features/shared/components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/lab" component={Lab} />
    <Route path="*" component={NotFound} />
  </Route>
);
