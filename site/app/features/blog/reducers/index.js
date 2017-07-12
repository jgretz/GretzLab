/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import active from './active.js';
import entries from './entries.js';

export default combineReducers({
  active,
  entries,
});
