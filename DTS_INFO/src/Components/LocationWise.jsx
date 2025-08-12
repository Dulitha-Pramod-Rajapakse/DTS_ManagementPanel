import * as React from 'react';
import './LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocationWiseChart from './LocationWiseChart.jsx';
import AvailabilityTableLocationWise from './AvailabilityTableLocationWise.jsx';

export default function LocationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on Location</h1>
      <LocationWiseChart />
      <AvailabilityTableLocationWise />
    </div>
  );
}
