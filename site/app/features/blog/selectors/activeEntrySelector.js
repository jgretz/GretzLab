import allEntriesSelector from './allEntriesSelector';
import {makeActiveItemSelector} from '../../shared/services';

export default makeActiveItemSelector(allEntriesSelector);
