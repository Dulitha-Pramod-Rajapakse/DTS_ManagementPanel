import React, { useEffect } from 'react';
import './DailyDeploymentTable.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeploymentData } from '../action/deploymentActions.js';

export default function DailyDeploymentTable() {
  const dispatch = useDispatch();
  const { deploymentData, loading } = useSelector((state) => state.deployment);

  useEffect(() => {
    dispatch(fetchDeploymentData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="deployment-container">
      <div className="deployment-card">
        <h2 className="deployment-title">DAILY DEPLOYMENT</h2>
        {deploymentData.map((item, index) => (
          <div className="deployment-item" key={index}>
            <div className="deployment-info">
              {item.code && <span className="deployment-code">{item.code}</span>}
              <span className="deployment-label">{item.label}</span>
            </div>
            <span className="deployment-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
