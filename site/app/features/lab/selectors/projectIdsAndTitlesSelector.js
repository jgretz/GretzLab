import {createSelector} from 'reselect';

import allProjectsSelector from './allProjectsSelector';

export default createSelector(allProjectsSelector,
  projects => projects.map(p => ({id: p.id, title: p.title})));
