import {stateReducer} from 'truefit-react-utils';

export default token => stateReducer(null, {
  [`SET_ACTIVE_${token}`]: (state, payload) => payload,
});
