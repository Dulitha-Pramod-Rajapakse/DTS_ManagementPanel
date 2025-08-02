import { configureStore } from '@reduxjs/toolkit';
import attendanceReducer from './features/attendance/attendanceSlice';

const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
  },
});

export default store;
