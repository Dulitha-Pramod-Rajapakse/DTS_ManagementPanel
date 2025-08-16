import { FETCH_DESIGNATION_WISE_DATA } from "../constants/DesignationWiseChartConstant";

const initialState = {
  labels: [],
  data: [],
  color: "#00CED1"
};

export const designationWiseChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESIGNATION_WISE_DATA:
      return {
        ...state,
        labels: action.payload.labels,
        data: action.payload.data,
        color: action.payload.color
      };
    default:
      return state;
  }
};
