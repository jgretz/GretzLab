import _ from 'lodash';
import {createSelector} from 'reselect';

import allProjectsSelector from './allProjectsSelector';

export default createSelector(allProjectsSelector,
  projects => {
    const idsAndTitles = projects.map(p => ({id: p.id, title: p.title})).toJS();
    return _.sortBy(idsAndTitles, [p => p.title]);
  }
);
