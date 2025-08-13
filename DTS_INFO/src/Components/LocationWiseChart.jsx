// LocationWiseChartLayout.js
import React, { useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationWiseData } from '../action/LocationWiseChartAction';
import './LocationWise.css';

const chartSetting = {
  xAxis: [{ label: 'Count' }],
  height: 400,
  margin: { left: 120 },
};

export default function LocationWiseChartLayout() {
  const dispatch = useDispatch();
  const dataset = useSelector((state) => state.locationWiseChart.dataset);

  useEffect(() => {
    dispatch(fetchLocationWiseData());
  }, [dispatch]);

  return (
    <div>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'role' }]}
        series={[
          { dataKey: 'available', label: 'Available', color: '#0D2C54' },
          { dataKey: 'strength', label: 'Strength', color: '#5BC0EB' },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
