import { FETCH_DESIGNATION_WISE_DATA } from "../constants/DesignationWiseChartConstant";

// Action Creator
export const fetchDesignationWiseData = () => {
  return {
    type: FETCH_DESIGNATION_WISE_DATA,
    payload: {
      labels: [
        "Welders", "Class Welders", "Fabricators", "Scaffolders",
        "Forklift Operators", "Cherry Picker", "Industril Workers",
        "Supervisors", "Engineers", "GroupLeaders"
      ],
      data: [89, 55, 5, 30, 20, 33, 40, 10, 20, 89],
      color: "#00CED1"
    }
  };
};
