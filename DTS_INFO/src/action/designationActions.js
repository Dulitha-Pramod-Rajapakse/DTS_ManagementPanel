// actions/designationActions.js
import { DESIGNATION_LIST_SUCCESS, DESIGNATION_LIST_FAIL } from '../constants/designationConstants';

export const listDesignations = () => async (dispatch) => {
    try {
        // In real usage, you might fetch from API instead of hardcoding
        const data = [
            { location: 'Welders', strength: 90, available: 89 },
            { location: 'Class Welders', strength: 70, available: 55 },
            { location: 'Fabricators', strength: 20, available: 5 },
            { location: 'Scaffolders', strength: 40, available: 30 },
            { location: 'Forklift Operators', strength: 40, available: 20 },
            { location: 'CherryPicker', strength: 50, available: 33 },
            { location: 'Industrial Workers', strength: 45, available: 40 },
            { location: 'Supervisors', strength: 50, available: 10 },
            { location: 'Engineers', strength: 40, available: 20 },
            { location: 'Group Leaders', strength: 90, available: 89 }
        ];

        dispatch({
            type: DESIGNATION_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DESIGNATION_LIST_FAIL,
            payload: error.message,
        });
    }
};
