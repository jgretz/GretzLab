import {createSelector} from 'reselect';
import allPagesSelector from './allPagesSelector';
import pageNameSelector from './pageNameSelector';

export default createSelector(allPagesSelector, pageNameSelector,
  (pages, pageName) => pages.find(page => page.name === pageName));
