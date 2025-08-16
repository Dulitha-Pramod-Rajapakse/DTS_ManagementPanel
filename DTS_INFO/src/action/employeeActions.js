// src/redux/employees/employeeActions.js
export const SET_EMPLOYEE_DATA = "SET_EMPLOYEE_DATA";

export const setEmployeeData = (data) => ({
  type: SET_EMPLOYEE_DATA,
  payload: data,
});

// Async thunk for fetching employees
export const fetchEmployeeData = () => async (dispatch) => {
  try {
    const response = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            "NC - 0261": [
              { serviceNo: "3000663", name: "Kumarasiri P.G.N", designation: "Supervisor" },
              { serviceNo: "3000103", name: "Wasantha G.", designation: "Supervisor" },
              { serviceNo: "3000890", name: "Wijethilika S.D.A.A", designation: "Supervisor" },
              { serviceNo: "3000104", name: "Jayaweera J.L", designation: "Welder" },
            ],
            "NC - 0260": [
              { serviceNo: "3000999", name: "John Doe", designation: "Technician" },
            ],
            "SR - 4536": [
              { serviceNo: "3000456", name: "Jane Smith", designation: "Engineer" },
            ],
          }),
        500
      )
    );

    dispatch(setEmployeeData(response));
  } catch (error) {
    console.error("Failed to fetch employee data", error);
  }
};
