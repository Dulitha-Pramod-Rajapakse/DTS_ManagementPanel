// LocationWiseChartReducer.js
import { FETCH_LOCATION_WISE_DATA } from './LocationWiseChartConstant';

const initialState = {
  dataset: [],
};

export const locationWiseChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION_WISE_DATA:
      return {
        ...state,
        dataset: action.payload,
      };
    default:
      return state;
  }
};
