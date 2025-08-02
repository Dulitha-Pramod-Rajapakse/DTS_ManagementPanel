import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  present: 270,
  total: 300,
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAttendance: (state, action) => {
      state.present = action.payload.present;
      state.total = action.payload.total;
    },
  },
});

export const { setAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
