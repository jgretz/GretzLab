/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import active from './active.js';
import projects from './projects.js';

export default combineReducers({
  active,
  projects,
});
