/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import lab from './features/lab/reducers';

const rootReducer = combineReducers({
  features: combineReducers({
    lab: lab,
  }),
  router: routerReducer,
});

export default rootReducer;
