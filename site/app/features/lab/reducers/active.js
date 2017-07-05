import {stateReducer} from 'truefit-react-utils';
import {SET_ACTIVE_PROJECT} from '../actions';

export default stateReducer(null, {
  [SET_ACTIVE_PROJECT]: (state, payload) => payload,
});
