import {stateReducer} from 'truefit-react-utils';
import {SET_ACTIVE_TALK} from '../actions';

export default stateReducer(null, {
  [SET_ACTIVE_TALK]: (state, payload) => payload,
});