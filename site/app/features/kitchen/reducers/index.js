/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import active from './active.js';
import recipes from './recipes.js';

export default combineReducers({
  active,
  recipes,
});
