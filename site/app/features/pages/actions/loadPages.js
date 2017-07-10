import {get} from 'truefit-react-utils';

export const LOAD_PAGES = 'LOAD_PAGES';
export const loadPages = () =>
  ({
    type: LOAD_PAGES,
    payload: get('page?expand=image'),
  });
