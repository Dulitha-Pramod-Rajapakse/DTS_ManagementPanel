
import { combineReducers } from "redux";
import { GetCurrentTime } from "./timeReducers";
import { attendanceReducer } from "./attendanceReducer"
import { locationListReducer } from "./locationReducer"
import { loginReducer } from "./loginReducer"; // Assuming you have a loginReducer

const rootReducer = combineReducers({
    GetCurrentTime,
    attendance: attendanceReducer,
    login:loginReducer,
    locationData: locationReducer
});

export default rootReducer;
