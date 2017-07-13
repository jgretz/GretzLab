import {loadEntries} from '../actions';
import {entryIdAndTitlesSelector} from '../selectors';
import {makeDataList} from '../../shared/services';

export default makeDataList(loadEntries, entryIdAndTitlesSelector);
