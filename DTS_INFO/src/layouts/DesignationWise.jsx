import * as React from 'react';
import '../layouts/LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS for navbar toggle
import DesignationWiseChart from '../Components/DesignationWiseChart.jsx';
import AvailabilityTableDesignationWise from '../Components/AvailabilityTableDesignationWise.jsx';
import FilteredLocationCountTable from "../Components/FilteredLocationCountTable.jsx";

const desig = [
  { location: 'HUC', available: 35 },
  { location: 'HUR', available: 80 },
  { location: 'Piping', available: 30 },
  { location: 'Afloat', available: 35 },
  { location: 'Scaffolding', available: 8 },
];

export default function DesignationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on Designation</h1>
      <br />
      <DesignationWiseChart />
      <AvailabilityTableDesignationWise />
      <FilteredLocationCountTable data={desig} />
    </div>
  );
}
