// src/redux/employees/employeeReducer.js
import { SET_EMPLOYEE_DATA } from "../action/employeeActions.js";

const initialState = {
  employeeData: {},
  loading: false,
  error: null,
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEE_DATA:
      return { ...state, employeeData: action.payload, loading: false };
    default:
      return state;
  }
}
