import {
  DEPLOYMENT_REQUEST,
  DEPLOYMENT_SUCCESS,
  DEPLOYMENT_FAIL,
  TOGGLE_EXPAND
} from "../constants/deploymentConstants";

const initialState = {
  deploymentData: [],
  loading: false,
  error: null,
  expandedIndex: null
};

export default function deploymentReducer(state = initialState, action) {
  switch (action.type) {
    case DEPLOYMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case DEPLOYMENT_SUCCESS:
      return { ...state, loading: false, deploymentData: action.payload };
    case DEPLOYMENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_EXPAND:
      return {
        ...state,
        expandedIndex:
          state.expandedIndex === action.payload ? null : action.payload
      };
    default:
      return state;
  }
}
