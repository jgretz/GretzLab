/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import active from './active.js';
import talks from './talks.js';

export default combineReducers({
  active,
  talks,
});
