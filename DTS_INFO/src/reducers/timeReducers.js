import {
    TIME_REQUEST,
    TIME_SUCCESS,
    TIME_FAIL,
} from "../constants/timeConstants";

const initialState = {
    requestbody: null,
    responseBody: {
        time: "",
        date: "",
        greeting: "",
    },
    error: null,
    msg: null,
    loading: false,
};

export const GetCurrentTime = (state = initialState, action) => {
    switch (action.type) {
        case TIME_REQUEST:
            return {
                ...state,
                loading: true,
                msg: null,
            };
        case TIME_SUCCESS:
            return {
                ...state,
                responseBody: action.payload.responsebody,
                msg: null,
};
        case TIME_FAIL:
            return {
                ...state,
                loading: false,
                msg: action.payload.msg,
                responseBody: {
                    time: "",
                    date: "",
                    greeting: "",
                },
            };
        default:
            return state;
    }
};