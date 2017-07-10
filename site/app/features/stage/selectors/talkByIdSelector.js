import {createSelector} from 'reselect';

import allTalksSelector from './allTalksSelector';
import talkIdSelector from './talkIdSelector';

export default createSelector(allTalksSelector, talkIdSelector,
  (talks, talkId) => talks.find(t => t.id === talkId));
