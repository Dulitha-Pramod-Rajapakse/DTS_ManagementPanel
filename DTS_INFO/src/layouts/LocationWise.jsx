import * as React from 'react';
import '../Components/LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocationWiseChart from '../Components/LocationWiseChart.jsx';
import AvailabilityTableLocationWise from '../Components/AvailabilityTableLocationWise.jsx';

export default function LocationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on Location</h1>
      <LocationWiseChart />
      <AvailabilityTableLocationWise />
    </div>
  );
}
