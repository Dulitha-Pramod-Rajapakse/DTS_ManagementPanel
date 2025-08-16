import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/login.js";

const initialState = {
  loading: false,  
  userInfo: null,  
  error: null,     
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, 
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload, 
        error: null,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.msg, 
      };

    default:
      return state; 
  }
};
