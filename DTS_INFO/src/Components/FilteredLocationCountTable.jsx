import * as React from 'react';
import '../layouts/LocationWise.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS for navbar toggle
import './AvailabilityTable.css';

const desig = [
  { location: 'HUC', available: 35 },
  { location: 'HUR', available: 80 },
  { location: 'Piping', available: 30 },
  { location: 'Afloat', available: 35 },
  { location: 'Scaffolding', available: 8 },
];

export default function AvailabilityTableDesignationWise() {
//   const desig = [
//     { location: 'HUC', available: 35 },
//     { location: 'HUR', available: 80 },
//     { location: 'Piping', available: 30 },
//     { location: 'Afloat', available: 35 },
//     { location: 'Scaffolding', available: 8 },
//   ];

  return (
    <div className="table-container">
      {/* Navbar Dropdown */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-start" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Welders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Class Welders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Fabricators</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Scaffolders</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Forklift Operators</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Cherry Pickers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Industrial Worker</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Supervisor</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Engineers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Group Leaders</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar Dropdown */}

      <table className="availability-table">
        <thead>
          <tr>
            <th className="blue">Location</th>
            <th className="dark">Available</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(({ location, available }) => (
            <tr key={location}>
              <td className="cell blue">{location}</td>
              <td className="cell gray dark-text">{available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
