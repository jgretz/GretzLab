import {List} from 'immutable';
import {promiseReducer} from 'truefit-react-utils';

export default token => promiseReducer(`LOAD_${token}`, List([]), {
  FULFILLED: (state, payload) => List(payload.data),
});
