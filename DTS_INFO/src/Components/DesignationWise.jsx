import * as React from 'react';
import './LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import DesignationWiseChart from './DesignationWiseChart.jsx';
import AvailabilityTableDesignationWise from './AvailabilityTableDesignationWise.jsx';

export default function DesignationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on Designation</h1>
      <br />
        <DesignationWiseChart />
        <AvailabilityTableDesignationWise />
    </div>
  );
}
