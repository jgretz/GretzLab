import {createSelector} from 'reselect';
import allPagesSelector from './allPagesSelector';
import {activeLocationSelector} from '../../shared/selectors';

export default createSelector(allPagesSelector, activeLocationSelector,
  (pages, location) => pages.find(page => page.name === location.page));
