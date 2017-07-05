import {createSelector} from 'reselect';

import allProjectsSelector from './allProjectsSelector';
import projectIdSelector from './projectIdSelector';

export default createSelector(allProjectsSelector, projectIdSelector,
  (projects, projectId) => projects.find(p => p.id === projectId));
