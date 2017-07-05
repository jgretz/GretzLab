import {createSelector} from 'reselect';
import allProjectsSelector from './allProjectsSelector';
import activeProjectIdSelector from './activeProjectIdSelector';

export default createSelector(allProjectsSelector, activeProjectIdSelector,
  (projects, id) => projects.find(p => p.id === id));
