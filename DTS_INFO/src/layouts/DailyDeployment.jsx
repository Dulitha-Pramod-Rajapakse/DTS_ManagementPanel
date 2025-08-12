import * as React from 'react';
import './DailyDeployment.css';
import 'bootstrap/dist/css/bootstrap.css';
import DailyDeploymentTable from '../Components/DailyDeploymentTable.jsx';

export default function DailyDeployment() {
  return (
    <div>
      <h1 className="Topic">Daily Deployment</h1>
      <DailyDeploymentTable />
    </div>
  );
}
