import {get} from 'truefit-react-utils';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const loadProjects = () =>
({
  type: LOAD_PROJECTS,
  payload: get('project?expand=tag'),
});
