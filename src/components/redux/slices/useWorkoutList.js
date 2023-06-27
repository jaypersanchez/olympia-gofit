import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const workoutListSlice = createSlice({
  name: "workoutList",
  initialState: initialState,
  reducers: {
    updateWorkoutList: (state, action) => {
      const updatedData = action.payload;
      Object.assign(state, updatedData);
    },
    resetWorkoutList: () => {
      return initialState;
    },
  },
});

export const { resetWorkoutList, updateWorkoutList } = workoutListSlice.actions;

export default workoutListSlice.reducer;
