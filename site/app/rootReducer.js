/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import blog from './features/blog/reducers';
import kitchen from './features/kitchen/reducers';
import lab from './features/lab/reducers';
import pages from './features/pages/reducers';
import shared from './features/shared/reducers';
import stage from './features/stage/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    blog,
    kitchen,
    lab,
    pages,
    shared,
    stage,
  }),
  routing: routerReducer,
});

export default rootReducer;
