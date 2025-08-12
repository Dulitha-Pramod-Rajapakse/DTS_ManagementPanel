import { combineReducers } from "redux";
import { GetCurrentTime } from "./timeReducers";
import { attendanceReducer } from "./attendanceReducer";

const rootReducer = combineReducers({
    GetCurrentTime,
    attendanceReducer,
});

export default rootReducer;
