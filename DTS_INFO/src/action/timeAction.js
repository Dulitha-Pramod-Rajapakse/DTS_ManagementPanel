import {
    TIME_REQUEST,
    TIME_SUCCESS,
    TIME_FAIL
} from "../constants/timeConstants";

import Timeservice from "../service/timeService";

export const GetCurrentTime = () => async (dispatch) => {
    dispatch({
        type: TIME_REQUEST,
    });

    return await Timeservice.GetCurrentTime().then(
        (data) => {
            dispatch({
                type: TIME_SUCCESS,
                payload: {
                    responsebody: data,
                },
            });
            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: TIME_FAIL,
                payload: {
                    msg: error.message || "Failed to fetch current time",
                },
            });
            return Promise.reject();
        }
    );
};