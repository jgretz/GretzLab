import allTalksSelector from './allTalksSelector';
import {makeActiveItemSelector} from '../../shared/services';

export default makeActiveItemSelector(allTalksSelector);
