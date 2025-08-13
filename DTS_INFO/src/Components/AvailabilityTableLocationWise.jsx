// src/components/AvailabilityTableLocationWise.jsx
import React, { useEffect } from 'react';
import './AvailabilityTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { listLocations } from '../action/locationActions';

export default function AvailabilityTableLocationWise() {
    const dispatch = useDispatch();

    const locationList = useSelector((state) => state.locationList);
    const { locations, loading, error } = locationList;

    useEffect(() => {
        dispatch(listLocations());
    }, [dispatch]);

    return (
        <div className="table-container">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && (
                <table className="availability-table">
                    <thead>
                        <tr>
                            <th className="blue">Locations</th>
                            <th className="blue">Strength</th>
                            <th className="dark">Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map(({ location, strength, available }) => {
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
            )}
        </div>
    );
}
