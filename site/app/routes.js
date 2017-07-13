import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './App';
import {Home} from './features/home/components';
import {Lab} from './features/lab/components';
import {Kitchen} from './features/kitchen/components';
import {Blog} from './features/blog/components';
import {Stage} from './features/stage/components';
import {NotFound} from './features/shared/components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="/lab" component={Lab} />
    <Route path="/lab/:title" component={Lab} />

    <Route path="/kitchen" component={Kitchen} />
    <Route path="/kitchen/:title" component={Kitchen} />

    <Route path="/stage" component={Stage} />
    <Route path="/stage/:title" component={Stage} />

    <Route path="/blog" component={Blog} />
    <Route path="/blog/:title" component={Blog} />

    <Route path="*" component={NotFound} />
  </Route>
);
