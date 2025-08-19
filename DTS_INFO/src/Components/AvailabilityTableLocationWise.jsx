// src/components/AvailabilityTableLocationWise.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listLocations } from '../action/locationActions';

export default function AvailabilityTableLocationWise() {
    const dispatch = useDispatch();

    const locationList = useSelector((state) => state.locationList);
    const { locations = [], loading = false, error = null } = locationList || {};

    useEffect(() => {
        dispatch(listLocations());
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
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
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
                                Locations
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
                        {locations.map(({ location, strength, available }) => {
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
            )}
        </div>
    );
}
