import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DailyDeploymentEx.css";

const deploymentData = [
  {
    code: "NC - 0261",
    label: "Hybrid Vessel",
    value: 71,
    date: "25.07.27",
    details: [
      { job: "Unit 1020", count: 4 },
      { job: "Unit 1021", count: 5 },
      { job: "Unit 1022", count: 22 },
      { job: "Unit 1023", count: 40 },
    ],
  },
  {
    code: "NC - 0260",
    label: "Cabling Vessel",
    value: 15,
    date: "25.07.27",
    details: [{ job: "Unit 1020", count: 15 }],
  },
  {
    code: "SR - 4536",
    label: "Hari Leela",
    value: 15,
    date: "25.07.27",
    details: [{ job: "SR - 4536", count: 15 }],
  },
];

export default function DailyDeploymentTable() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const goToEmployees = (item) => {
    navigate(`/employees/${encodeURIComponent(item.code)}`, { state: item });
  };

  return (
    <div className="deployment-container">
      <div className="deployment-card">
        <h2 className="deployment-title">DAILY DEPLOYMENT</h2>

        {deploymentData.map((item, index) => (
          <div key={index}>
            {/* Main Summary */}
            <div
              className="deployment-item"
              onClick={() => toggleExpand(index)}
            >
              <div className="deployment-info">
                {item.code && (
                  <span className="deployment-code">{item.code}</span>
                )}
                <span className="deployment-label">{item.label}</span>
              </div>
              <span className="deployment-value">{item.value}</span>
            </div>

            {/* Expanded Details */}
            {expandedIndex === index && (
              <div className="details-card">
                <div className="details-header">
                  <span>{item.date}</span>
                  <span>{item.code}</span>
                  {/* Make "Employees" clickable */}
                  <span
                    className="clickable-employees"
                    onClick={() => goToEmployees(item)}
                  >
                    Employees
                  </span>
                </div>

                <div className="details-table">
                  <div className="details-row header">
                    <span>Job No.</span>
                    <span>Employee Count</span>
                  </div>
                  {item.details.map((d, i) => (
                    <div className="details-row" key={i}>
                      <span>{d.job}</span>
                      <span>{d.count}</span>
                    </div>
                  ))}
                  <div className="details-row total">
                    <span>Total</span>
                    <span>{item.value}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
