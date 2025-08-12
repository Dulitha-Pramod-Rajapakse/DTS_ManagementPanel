// src/actions/designationChartActions.js
import {
    DESIGNATION_CHART_REQUEST,
    DESIGNATION_CHART_SUCCESS,
    DESIGNATION_CHART_FAIL
} from '../constants/designationChartConstants';

// This action can be API-based in the future
export const getDesignationChartData = () => async (dispatch) => {
    try {
        dispatch({ type: DESIGNATION_CHART_REQUEST });

        // Mock data from your current component
        const data = {
            labels: [
                'Welders', 'Class Welders', 'Fabricators', 'Scaffolders',
                'Forklift Operators', 'Cherry Picker', 'Industril Workers',
                'Supervisors', 'Engineers', 'GroupLeaders'
            ],
            values: [89, 55, 5, 30, 20, 33, 40, 10, 20, 89]
        };

        dispatch({
            type: DESIGNATION_CHART_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DESIGNATION_CHART_FAIL,
            payload: error.message || 'Something went wrong',
        });
    }
};
