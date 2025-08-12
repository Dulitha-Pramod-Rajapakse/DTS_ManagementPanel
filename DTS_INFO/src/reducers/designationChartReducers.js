// src/reducers/designationChartReducers.js
import {
    DESIGNATION_CHART_REQUEST,
    DESIGNATION_CHART_SUCCESS,
    DESIGNATION_CHART_FAIL
} from '../constants/designationChartConstants';

export const designationChartReducer = (
    state = { labels: [], values: [], loading: false },
    action
) => {
    switch (action.type) {
        case DESIGNATION_CHART_REQUEST:
            return { ...state, loading: true, error: null };
        case DESIGNATION_CHART_SUCCESS:
            return {
                loading: false,
                labels: action.payload.labels,
                values: action.payload.values
            };
        case DESIGNATION_CHART_FAIL:
            return { loading: false, error: action.payload, labels: [], values: [] };
        default:
            return state;
    }
};
