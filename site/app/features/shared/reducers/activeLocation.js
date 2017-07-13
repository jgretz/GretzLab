import {stateReducer} from 'truefit-react-utils';
import {SET_ACTIVE_LOCATION} from '../actions';

export default stateReducer({}, {
  [SET_ACTIVE_LOCATION]: (state, payload) => payload,
});
