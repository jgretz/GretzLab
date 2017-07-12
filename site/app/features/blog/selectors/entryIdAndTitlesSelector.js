import {createSelector} from 'reselect';
import allEntriesSelector from './allEntriesSelector';

export default createSelector(allEntriesSelector,
  entries => entries
    .map(e => ({id: e.id, title: e.title}))
    .sortBy(e => e.title)
    .toJS()
);
