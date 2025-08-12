import { SET_ATTENDANCE } from "../constants/AttendanceConstants";

const initialState = {
    present : 270 ,
    total: 300,
};


export const attendanceReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_ATTENDANCE:
            return{
                ...state,
                present: action.payload.present,
                total: action.payload.total,
            };
            default:
                return state;
    }
};