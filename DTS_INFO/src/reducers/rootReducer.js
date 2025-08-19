
import { combineReducers } from "redux";
import { GetCurrentTime } from "./timeReducers";
import { attendanceReducer } from "./attendanceReducer"
import { locationListReducer } from "./locationReducers"
import { locationWiseChartReducer } from "./LocationWiseChartReducer";
import { loginReducer } from "./loginReducer"; 
import { designationWiseChartReducer } from "./DesignationWiseChartReducer"; 

const rootReducer = combineReducers({
    GetCurrentTime,
    attendance: attendanceReducer,
    login:loginReducer,
    locationData: locationListReducer,
    locationWiseChart: locationWiseChartReducer,
    designationWiseChart: designationWiseChartReducer,

});

export default rootReducer;
