import {
  SET_DEPLOYMENT_DATA,
  TOGGLE_EXPAND,
  DEPLOYMENT_REQUEST,
  DEPLOYMENT_SUCCESS,
  DEPLOYMENT_FAIL
} from "../constants/deploymentConstants";

// Set deployment data (synchronous)
export const setDeploymentData = (data) => ({
  type: SET_DEPLOYMENT_DATA,
  payload: data,
});

// Toggle expand state
export const toggleExpand = (index) => ({
  type: TOGGLE_EXPAND,
  payload: index,
});

// Async thunk for fetching deployment data
export const fetchDeploymentData = () => async (dispatch) => {
  try {
    dispatch({ type: DEPLOYMENT_REQUEST });

    // Simulate API request
    const response = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { code: "NC - 0261", label: "Hybrid Vessel", value: 71 },
            { code: "NC - 0260", label: "Cabling Vessel", value: 15 },
            { code: "SR - 4536", label: "Hari Leela", value: 15 },
            { code: "SR - 4536", label: "MT Ocean City", value: 13 },
            { code: "", label: "Workshops", value: 39 },
          ]),
        500
      )
    );

    dispatch({
      type: DEPLOYMENT_SUCCESS,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: DEPLOYMENT_FAIL,
      payload: error.message
    });
  }
};
