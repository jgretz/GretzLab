import allProjectsSelector from './allProjectsSelector';
import {makeActiveItemSelector} from '../../shared/services';

export default makeActiveItemSelector(allProjectsSelector);
