
import { RedFlagConstants } from '../../actions/actionTypes';


const viewAllRedFlagsReducer = (state = {
  redflags: [],
}, { type, payload }) => {
  switch (type) {
    case RedFlagConstants.VIEW_REDFLAGS_SUCCESS:
      return {
        ...state,
        redflags: payload,
      };
    case RedFlagConstants.VIEW_REDFLAGS_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default viewAllRedFlagsReducer;
