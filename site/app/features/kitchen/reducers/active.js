import {stateReducer} from 'truefit-react-utils';
import {SET_ACTIVE_RECIPE} from '../actions';

export default stateReducer(null, {
  [SET_ACTIVE_RECIPE]: (state, payload) => payload,
});
