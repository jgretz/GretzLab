import React from 'react';
import {withRouter} from 'react-router';

import {Header} from './features/header/components';
import {Routes} from './features/shared/components';

const App = () => (
  <div className="wrapper">
    <Header />
    <Routes />
  </div>
);

export default withRouter(App);
