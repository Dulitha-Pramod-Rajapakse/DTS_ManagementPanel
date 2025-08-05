import { combineReducers } from "redux";
import { GetCurrentTime } from "./timeReducers";

const rootReducer = combineReducers({
    GetCurrentTime,
});

export default rootReducer;
