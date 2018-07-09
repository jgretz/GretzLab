import React from 'react';
import {withRouter} from 'react-router';

import {Routes} from './features/shared/components';

const App = () => (
  <div className="wrapper">
    <Routes />
  </div>
);

export default withRouter(App);
