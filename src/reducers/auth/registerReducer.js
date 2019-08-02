
import { RegisterConstants } from '../../actions/actionTypes';


const registerReducer = (state = {
  registered: '',
}, { type, payload }) => {
  switch (type) {
    case RegisterConstants.REGISTER_USER_SUCCESS:
      return {
        ...state,
        registered: payload,
      };
    case RegisterConstants.REGISTER_USER_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
