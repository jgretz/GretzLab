import {createSelector} from 'reselect';
import allTalksSelector from './allTalksSelector';

export default createSelector(allTalksSelector,
  talks => talks
    .map(t => ({id: t.id, title: t.title}))
    .sortBy(t => t.title)
    .toJS()
);
