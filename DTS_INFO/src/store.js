import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";

import deploymentReducer from "./reducers/deploymentReducer";
import employeeReducer from "./reducers/employeeReducer";

const rootReducer = combineReducers({
    employees: employeeReducer,
    deployment: deploymentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
