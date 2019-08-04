import axios from 'axios';
import { toast } from 'react-toastify';
import { LoginConstants } from '../actionTypes';
import history from '../../utils/history';
import { toastSuccess, toastFailure } from '../../utils/toast';

const apiUrl = 'https://ireporter256version2.herokuapp.com/api/v2/auth/login';


const loginUserAction = userData => dispatch => axios.post(apiUrl, userData)
  .then((response) => {
    dispatch({
      type: LoginConstants.LOGIN_USER_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess('Welcome, Login Successful', 'A');
    sessionStorage.setItem('token', response.data.data.access_token);
    sessionStorage.setItem('isLoggedIn', true);
    history.push('/home');
  })
  .catch((error) => {
    toast.dismiss();
    toastFailure(`${error.response.data.error}`, 'A');
    dispatch({
      type: LoginConstants.LOGIN_USER_FAILED,
      payload: error.response.data.error,
    });
  });

export default loginUserAction;
