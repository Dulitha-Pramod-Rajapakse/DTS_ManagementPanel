import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployeeData } from "../action/employeeActions.js";
import "./EmployeeList.css";

export default function EmployeeList() {
  const { code } = useParams();
  const decodedCode = decodeURIComponent(code);
  const dispatch = useDispatch();
  const { employeeData, loading } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);

  if (loading) return <p>Loading employees...</p>;

  const employees = employeeData[decodedCode] || [];

  return (
    <div className="employee-page-container">
      <div className="page-header">
        <h2>OVERTIME WORK EMPLOYEES</h2>
        <h3>{decodedCode}</h3>
      </div>
      <div className="employee-table">
        <div className="employee-row header">
          <span className="col-service">Service No.</span>
          <span className="col-name">Name</span>
          <span className="col-designation">Designation</span>
        </div>
        {employees.map((emp, index) => (
          <div className="employee-row" key={index}>
            <span className="service-no">{emp.serviceNo}</span>
            <span className="employee-name">{emp.name}</span>
            <span className="designation">{emp.designation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
