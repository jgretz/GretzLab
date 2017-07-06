import {List} from 'immutable';
import {promiseReducer} from 'truefit-react-utils';

import {LOAD_RECIPES} from '../actions';

export default promiseReducer(LOAD_RECIPES, List([]), {
  FULFILLED: (state, payload) => List(payload.data),
});
