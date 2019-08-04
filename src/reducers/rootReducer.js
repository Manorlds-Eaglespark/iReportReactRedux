import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer';
import registerReducer from './auth/registerReducer';


export default combineReducers({
  loginReducer,
  registerReducer,
});
