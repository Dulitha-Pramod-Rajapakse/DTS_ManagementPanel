// reducers/designationReducers.js
import { DESIGNATION_LIST_SUCCESS, DESIGNATION_LIST_FAIL } from '../constants/designationConstants';

export const designationListReducer = (state = { designations: [] }, action) => {
    switch (action.type) {
        case DESIGNATION_LIST_SUCCESS:
            return { ...state, designations: action.payload };
        case DESIGNATION_LIST_FAIL:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
