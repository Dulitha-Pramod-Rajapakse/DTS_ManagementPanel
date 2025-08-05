// src/components/AvailabilityTable.jsx
import React from 'react';
import './AvailabilityTable.css';

const desig = [
    { Designation: 'Welders', strength: 90, available: 89 },
    { Designation: 'Class Welders', strength: 70, available: 55 },
    { Designation: 'Fabricators', strength: 20, available: 5 },
    { Designation: 'Scaffolders', strength: 40, available: 30 },
    { Designation: 'Forklift Operators', strength: 40, available: 20 },
    { Designation: 'CherryPicker', strength: 50, available: 33 },
    { Designation: 'Industrial Workers', strength: 45, available: 40 },
    { Designation: 'Supervisors', strength: 50, available: 10 },
    { Designation: 'Engineers', strength: 40, available: 20 },
    { Designation: 'Group Leaders', strength: 90, available: 89 }
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
                    {desig.map(({ Designation, strength, available }) => {
                        const percent = ((available / strength) * 100).toFixed(1);
                        return (
                            <tr key={location}>
                                <td className="cell blue">{Designation}</td>
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
