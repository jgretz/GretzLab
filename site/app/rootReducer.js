/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import pages from './features/pages/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    pages,
  }),
  routing: routerReducer,
});

export default rootReducer;
