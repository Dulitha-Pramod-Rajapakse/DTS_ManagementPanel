
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { attendanceReducer } from "./reducers/attendanceReducer";
import { locationReducer } from "./reducers/filteredLocationReducer";


const rootReducer = combineReducers({
  attendance: attendanceReducer,
   locationData: locationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())  // no thunk for now

);

export default store;
