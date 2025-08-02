// src/components/AvailabilityTable.jsx
import React from 'react';
import './AvailabilityTable.css';

const data = [
  { location: 'HUR', strength: 40, available: 35 },
  { location: 'HUC', strength: 90, available: 80 },
  { location: 'Piping', strength: 35, available: 30 },
  { location: 'Afloat', strength: 45, available: 35 },
  { location: 'Sacffolding', strength: 15, available: 8 },
  { location: 'Services', strength: 50, available: 30 },
];

export default function AvailabilityTableLocationWise() {
  return (
    <div className="table-container">
      <table className="availability-table">
        <thead>
          <tr>
            <th className="blue">Locations</th>
            <th className="blue">Strength</th>
            <th className="dark">Available</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ location, strength, available }) => {
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
  );
}
