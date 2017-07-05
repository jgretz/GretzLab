import {List} from 'immutable';
import {promiseReducer} from 'truefit-react-utils';

import {LOAD_PROJECTS} from '../actions';

export default promiseReducer(LOAD_PROJECTS, List([]), {
  FULFILLED: (state, payload) => List(payload.data),
});
