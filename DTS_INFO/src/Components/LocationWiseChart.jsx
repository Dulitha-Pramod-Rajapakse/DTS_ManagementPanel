// LocationWiseChartLayout.js
import React, { useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationWiseData } from '../action/LocationWiseChartAction';
import '../layouts/LocationWise.css';



const chartSetting = {
  xAxis: [{ label: 'Count' }],
  height: 400,
  margin: { left: 120 },
};

export default function LocationWiseChartLayout() {
  const dispatch = useDispatch();
  const dataset = useSelector((state) => state.locationWiseChart.dataset);

  console.log('LocationWiseChartLayout dataset:', dataset);
  useEffect(() => {
    dispatch(fetchLocationWiseData());
  }, [dispatch]);


  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'role' }]}
        series={[
          { dataKey: 'available', label: 'Available', color: '#0D2C54' },
          { dataKey: 'strength', label: 'Strength', color: '#5BC0EB' },
        ]}
        layout="horizontal"
        xAxis={[{ label: 'Count' }]}
        width={400}
        height={400}
        margin={{ right: 50 }}
      />
    </div>
  );
}
