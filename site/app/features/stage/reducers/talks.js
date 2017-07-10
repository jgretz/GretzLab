import {List} from 'immutable';
import {promiseReducer} from 'truefit-react-utils';

import {LOAD_TALKS} from '../actions';

export default promiseReducer(LOAD_TALKS, List([]), {
  FULFILLED: (state, payload) => List(payload.data),
});
