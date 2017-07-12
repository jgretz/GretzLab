import {createSelector} from 'reselect';
import allEntriesSelector from './allEntriesSelector';
import activeEntryIdSelector from './activeEntryIdSelector';

export default createSelector(allEntriesSelector, activeEntryIdSelector,
  (entries, id) => entries.find(e => e.id === id));
