
import { combineReducers } from "redux";
import { GetCurrentTime } from "./timeReducers";
import { attendanceReducer } from "./attendanceReducer";
import { loginReducer } from "./loginReducer"; // Assuming you have a loginReducer

const rootReducer = combineReducers({
    GetCurrentTime,
    attendance: attendanceReducer,
    login:loginReducer,
});

export default rootReducer;
