import {PROJECT} from '../../constants';
import {makeLoadAction} from '../../shared/services';

export const loadProjects = () => makeLoadAction(PROJECT, 'project');
