// src/reducers/locationReducers.js
import {
    LOCATION_LIST_REQUEST,
    LOCATION_LIST_SUCCESS,
    LOCATION_LIST_FAIL
} from '../constants/locationConstants';

export const locationListReducer = (
    state = { locations: [], loading: false },
    action
) => {
    switch (action.type) {
        case LOCATION_LIST_REQUEST:
            return { ...state, loading: true, error: null };
        case LOCATION_LIST_SUCCESS:
            return { loading: false, locations: action.payload };
        case LOCATION_LIST_FAIL:
            return { loading: false, error: action.payload, locations: [] };
        default:
            return state;
    }
};
