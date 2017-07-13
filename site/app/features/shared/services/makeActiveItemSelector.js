import {createSelector} from 'reselect';
import {activeLocationSelector} from '../selectors';
import {replaceAll} from '../../shared/services';

export default listSelector => createSelector(listSelector, activeLocationSelector,
  (list, location) => {
    const title = replaceAll(location.title, '-', ' ');

    return list.find(x => x.title === title);
  });
