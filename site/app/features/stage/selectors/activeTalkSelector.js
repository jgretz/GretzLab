import {createSelector} from 'reselect';
import allTalksSelector from './allTalksSelector';
import activeTalkIdSelector from './activeTalkIdSelector';

export default createSelector(allTalksSelector, activeTalkIdSelector,
  (talks, id) => talks.find(t => t.id === id));
