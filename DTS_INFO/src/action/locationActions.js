// src/actions/locationActions.js
import axios from 'axios';
import {
    LOCATION_LIST_REQUEST,
    LOCATION_LIST_SUCCESS,
    LOCATION_LIST_FAIL
} from '../constants/locationConstants';

export const listLocations = () => async (dispatch) => {
    try {
        dispatch({ type: LOCATION_LIST_REQUEST });

        // Mock API — replace with real endpoint if available
        // const { data } = await axios.get('/api/locations');

        const data = [
            { location: 'HUR', strength: 40, available: 35 },
            { location: 'HUC', strength: 90, available: 80 },
            { location: 'Piping', strength: 35, available: 30 },
            { location: 'Afloat', strength: 45, available: 35 },
            { location: 'Sacffolding', strength: 15, available: 8 },
            { location: 'Services', strength: 50, available: 30 },
        ];

        dispatch({
            type: LOCATION_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOCATION_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
