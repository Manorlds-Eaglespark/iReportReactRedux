import axios from 'axios';
import { toast } from 'react-toastify';
import { RedFlagConstants } from '../actionTypes';
import { toastFailure } from '../../utils/toast';

const apiUrl = 'https://ireporter256version2.herokuapp.com/api/v2/red-flags';


const viewAllRedFlagsAction = () => dispatch => axios.get(apiUrl, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${sessionStorage.getItem('token')}`,
  },
})
  .then((response) => {
    dispatch({
      type: RedFlagConstants.VIEW_REDFLAGS_SUCCESS,
      payload: response.data.redflags,
    });
  })
  .catch((error) => {
    console.log(error);
    const errorMessage = error.response.data.error;
    toast.dismiss();
    toastFailure(`${errorMessage}`, 'A');
    dispatch({
      type: RedFlagConstants.VIEW_REDFLAGS_FAIL,
      payload: errorMessage,
    });
  });

export default viewAllRedFlagsAction;
