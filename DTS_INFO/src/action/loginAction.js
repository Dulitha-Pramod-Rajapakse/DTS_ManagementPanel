import {LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS} from "../constants/login.js"
import loginService  from "../service/loginService.js";

export const login = (username, password, navigate) => async (dispatch) => {
  try {

    dispatch({ type: LOGIN_REQUEST });

   
    const response = await loginService(username, password);

    
    if (response.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data, 
      });

      // Navigate to dashboard or home page
      navigate("/");
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: { msg: "Invalid username or password" },
      });
    }
  } catch (error) {
   
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: LOGIN_FAIL,
      payload: { msg: message },
    });
  }
};