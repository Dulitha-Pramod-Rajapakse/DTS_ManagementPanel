import * as React from 'react';
import './LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import DesignationWiseChart from './DesignationWiseChart.jsx';
import AvailabilityTableDesignationWise from './AvailabilityTableDesignationWise.jsx';
import './AvailabilityTable.css';

const desig = [
  { location: 'Welders', strength: 90, available: 89 },
  { location: 'Class Welders', strength: 70, available: 55 },
  { location: 'Fabricators', strength: 20, available: 5 },
  { location: 'Scaffolders', strength: 40, available: 30 },
  { location: 'Forklift Operators', strength: 40, available: 20 },
  { location: 'CherryPicker', strength: 50, available: 33 },
  { location: 'Industrial Workers', strength: 45, available: 40 },
  { location: 'Supervisors', strength: 50, available: 10 },
  { location: 'Engineers', strength: 40, available: 20 },
  { location: 'Group Leaders', strength: 90, available: 89 }
];

export default function DesignationWise() {
  return (
    <div>
      <h1 className="Topic">Employee Attendance based on Designation</h1>
      <br />
      <DesignationWiseChart />
      <AvailabilityTableDesignationWise />

      <div className="table-container">
        {/*Dropdown*/}

        <div className="btn-group">
          <button type="button" className="btn btn-danger">Action</button>
          <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        {/*Dropdown */}
        <table className="availability-table">
          <thead>
            <tr>
              <th className="blue">Designation</th>
              <th className="blue">Strength</th>
              <th className="dark">Available</th>
            </tr>
          </thead>
          <tbody>
            {desig.map(({ location, strength, available }) => {
              const percent = ((available / strength) * 100).toFixed(1);
              return (
                <tr key={location}>
                  <td className="cell blue">{location}</td>
                  <td className="cell gray">{strength}</td>
                  <td className="cell gray dark-text">
                    {available} ({percent}%)
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
