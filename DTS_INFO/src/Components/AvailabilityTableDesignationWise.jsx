// src/components/AvailabilityTable.jsx
import React from 'react';
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

export default function AvailabilityTableDesignationWise() {
    return (
        <div className="table-container">
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
    );
}
