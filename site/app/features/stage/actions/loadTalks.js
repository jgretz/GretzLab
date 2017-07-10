import {get} from 'truefit-react-utils';

export const LOAD_TALKS = 'LOAD_TALKS';
export const loadTalks = () =>
  ({
    type: LOAD_TALKS,
    payload: get('talk?expand=tags,conferences'),
  });
