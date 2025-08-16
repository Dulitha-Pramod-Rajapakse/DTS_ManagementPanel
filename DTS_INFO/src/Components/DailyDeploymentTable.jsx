import React from 'react';
import './DailyDeploymentTable.css';

const deploymentData = [
  { code: 'NC - 0261', label: 'Hybrid Vessel', value: 71 },
  { code: 'NC - 0260', label: 'Cabling Vessel', value: 15 },
  { code: 'SR - 4536', label: 'Hari Leela', value: 15 },
  { code: 'SR - 4536', label: 'MT Ocean City', value: 13 },
  { code: '', label: 'Workshops', value: 39 },
];

export default function DailyDeployment() {
  return (
    <div className="deployment-container">
      <div className="deployment-card">
        <h2 className="deployment-title">DAILY DEPLOYMENT</h2>

        {deploymentData.map((item, index) => (
          <div className="deployment-item" key={index}>
            <div className="deployment-info">
              {item.code && <span className="deployment-code">{item.code}</span>}
              <span className="deployment-label">{item.label}</span>
            </div>
            <span className="deployment-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



