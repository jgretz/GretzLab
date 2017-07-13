import {loadTalks} from '../actions';
import {talkIdAndTitlesSelector} from '../selectors';
import {makeDataList} from '../../shared/services';

export default makeDataList(loadTalks, talkIdAndTitlesSelector);

