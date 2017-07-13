import {loadProjects} from '../actions';
import {projectIdsAndTitlesSelector} from '../selectors';
import {makeDataList} from '../../shared/services';

export default makeDataList(loadProjects, projectIdsAndTitlesSelector);
