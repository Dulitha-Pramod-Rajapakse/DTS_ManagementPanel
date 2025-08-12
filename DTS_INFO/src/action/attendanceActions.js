import {SET_ATTENDANCE} from "../constants/AttendanceConstants";


export const setAttendance = (present , total ) => {
    return {
        type: SET_ATTENDANCE ,
        payload: {present, total}
    };
};