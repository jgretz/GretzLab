import {createSelector} from 'reselect';

import allEntriesSelector from './allEntriesSelector';
import entryIdSelector from './entryIdSelector';

export default createSelector(allEntriesSelector, entryIdSelector,
  (entries, entryId) => entries.find(e => e.id === entryId));
