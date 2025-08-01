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

export default function AvailabilityTable() {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="header-cell">Locations</div>
        <div className="header-cell">Strength</div>
        <div className="header-cell dark">Available</div>
      </div>
      {data.map(({ location, strength, available }) => {
        const percent = ((available / strength) * 100).toFixed(1);
        return (
          <div className="table-row" key={location}>
            <div className="cell blue">{location}</div>
            <div className="cell gray">{strength}</div>
            <div className="cell gray dark-text">
              {available} ({percent}%)
            </div>
          </div>
        );
      })}
    </div>
  );
}
