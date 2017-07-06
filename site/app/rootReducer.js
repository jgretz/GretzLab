/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import kitchen from './features/kitchen/reducers';
import lab from './features/lab/reducers';
import pages from './features/pages/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    kitchen,
    lab,
    pages,
  }),
  routing: routerReducer,
});

export default rootReducer;
