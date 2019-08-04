import axios from 'axios';
import { toast } from 'react-toastify';
import { RegisterConstants } from '../actionTypes';
import history from '../../utils/history';
import { toastSuccess, toastFailure } from '../../utils/toast';


const apiUrl = 'https://ireporter256version2.herokuapp.com/api/v2/auth/register';


const registerUserAction = userData => dispatch => axios.post(apiUrl, userData)
  .then((response) => {
    dispatch({
      type: RegisterConstants.REGISTER_USER_SUCCESS,
      payload: response.data.message,
    });
    const name = response.data.data.firstname;
    toast.dismiss();
    toastSuccess(`Welcome ${name}, You can now login`, 'A');
    history.push('/login');
  })
  .catch((error) => {
    toast.dismiss();
    toastFailure(`${error.response.data.error}`, 'A');
    dispatch({
      type: RegisterConstants.REGISTER_USER_FAIL,
      payload: error.response.data.error,
    });
  });

export default registerUserAction;
