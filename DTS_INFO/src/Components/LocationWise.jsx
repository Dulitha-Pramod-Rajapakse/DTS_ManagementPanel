import * as React from 'react';
import './LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocationWiseChart from './LocationWiseChart.jsx';
import AvailabilityTable from './AvailabilityTable.jsx';

export default function LocationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on Location</h1>
      <LocationWiseChart />
      <AvailabilityTable />
    </div>
  );
}
