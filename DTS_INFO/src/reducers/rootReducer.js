
import { combineReducers } from "redux";
import { GetCurrentTime } from "./timeReducers";
import { attendanceReducer } from "./attendanceReducer"
import { locationListReducer } from "./locationReducers"
import { locationWiseChartReducer } from "./LocationWiseChartReducer";
import { loginReducer } from "./loginReducer"; // Assuming you have a loginReducer
import { designationWiseChartReducer } from "./DesignationWiseChartReducer"; // Importing action for fetching data

const rootReducer = combineReducers({
    GetCurrentTime,
    attendance: attendanceReducer,
    login:loginReducer,
    locationData: locationListReducer,
    locationWiseChart: locationWiseChartReducer,
    designationWiseChart: designationWiseChartReducer,

});

export default rootReducer;
