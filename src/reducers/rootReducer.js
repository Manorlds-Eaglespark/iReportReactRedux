import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer';
import registerReducer from './auth/registerReducer';
import viewAllRedFlagsReducer from './redflags/viewAllRedFlagsReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  viewAllRedFlagsReducer,
});
