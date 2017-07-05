/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import lab from './features/lab/reducers';
import pages from './features/pages/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    lab,
    pages,
  }),
  routing: routerReducer,
});

export default rootReducer;
