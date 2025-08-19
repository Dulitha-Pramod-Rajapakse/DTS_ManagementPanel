// components/AvailabilityTableDesignationWise.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listDesignations } from '../action/designationActions';

export default function AvailabilityTableDesignationWise() {
    const dispatch = useDispatch();

    const designationList = useSelector((state) => state.designationList) || {};
    const { designations = [], error } = designationList;

    useEffect(() => {
        dispatch(listDesignations());
    }, [dispatch]);

    return (
        <div
            style={{
                width: "90%",
                maxWidth: "600px",
                margin: "30px auto",
                fontFamily: "'Segoe UI', sans-serif",
                overflowX: "auto"
            }}
        >
            {error && <p style={{ color: "red" }}>{error}</p>}
            <table
                style={{
                    width: "100%",
                    borderCollapse: "separate",
                    borderSpacing: "12px 12px"
                }}
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                textAlign: "center",
                                padding: "8px 12px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                borderRadius: "12px",
                                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#5bc0eb",
                                color: "white"
                            }}
                        >
                            Designation
                        </th>
                        <th
                            style={{
                                textAlign: "center",
                                padding: "8px 12px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                borderRadius: "12px",
                                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#5bc0eb",
                                color: "white"
                            }}
                        >
                            Strength
                        </th>
                        <th
                            style={{
                                textAlign: "center",
                                padding: "8px 12px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                borderRadius: "12px",
                                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                                backgroundColor: "#19357B",
                                color: "white"
                            }}
                        >
                            Available
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {designations.map(({ location, strength, available }) => {
                        const percent = ((available / strength) * 100).toFixed(1);
                        return (
                            <tr key={location}>
                                <td
                                    style={{
                                        textAlign: "center",
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        borderRadius: "12px",
                                        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                                        border: "1px solid #ccc",
                                        backgroundColor: "#5bc0eb",
                                        color: "white"
                                    }}
                                >
                                    {location}
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        borderRadius: "12px",
                                        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                                        border: "1px solid #ccc",
                                        backgroundColor: "#E1E4E6",
                                        color: "#2A9FCF"
                                    }}
                                >
                                    {strength}
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        borderRadius: "12px",
                                        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                                        border: "1px solid #ccc",
                                        backgroundColor: "#E1E4E6",
                                        color: "#192C5E"
                                    }}
                                >
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
