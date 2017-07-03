import {List} from 'immutable';
import {promiseReducer} from 'truefit-react-utils';

import {LOAD_PAGES} from '../actions';

export default promiseReducer(LOAD_PAGES, List([]), {
  FULFILLED: (state, payload) => List(payload.data),
});
