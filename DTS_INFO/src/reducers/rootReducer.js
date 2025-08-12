// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import { GetCurrentTime } from './timeReducers';
import { locationListReducer } from './locationReducers';

const rootReducer = combineReducers({
    GetCurrentTime,            // State slice for current time
    locationList: locationListReducer, // State slice for location list
});

export default rootReducer;
