// components/AvailabilityTableDesignationWise.jsx
import React, { useEffect } from 'react';
import './AvailabilityTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { listDesignations } from '../action/designationActions';

export default function AvailabilityTableDesignationWise() {
    const dispatch = useDispatch();

    const designationList = useSelector((state) => state.designationList);
    const { designations, error } = designationList;

    useEffect(() => {
        dispatch(listDesignations());
    }, [dispatch]);

    return (
        <div className="table-container">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table className="availability-table">
                <thead>
                    <tr>
                        <th className="blue">Designation</th>
                        <th className="blue">Strength</th>
                        <th className="dark">Available</th>
                    </tr>
                </thead>
                <tbody>
                    {designations.map(({ location, strength, available }) => {
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
