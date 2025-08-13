// LocationWiseChartAction.js
import { FETCH_LOCATION_WISE_DATA } from '../constants/LocationWiseChartConstant';

export const fetchLocationWiseData = () => {
  // In a real app, this could be an API call
  const dataset = [
    { role: 'Others', available: 20, strength: 35 },
    { role: 'Services', available: 30, strength: 50 },
    { role: 'Scaffolding', available: 8, strength: 15 },
    { role: 'Afloat', available: 35, strength: 45 },
    { role: 'Piping', available: 30, strength: 35 },
    { role: 'HUC', available: 80, strength: 90 },
    { role: 'HUR', available: 35, strength: 40 },
  ];

  return {
    type: FETCH_LOCATION_WISE_DATA,
    payload: dataset,
  };
};
