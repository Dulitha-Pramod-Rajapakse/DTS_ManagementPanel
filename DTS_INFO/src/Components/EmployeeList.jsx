import React from "react";
import { useParams } from "react-router-dom";
import "./EmployeeList.css";

const sampleEmployeeData = {
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
};

export default function EmployeeList() {
  const { code } = useParams();
  const decodedCode = decodeURIComponent(code);
  const employees = sampleEmployeeData[decodedCode] || [];

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
