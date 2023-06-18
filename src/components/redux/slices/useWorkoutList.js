import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "react-native-config";

const initialState = {
  loading: false,
  error: false,
  workoutList: [],
};

export const fetchWorkoutList = createAsyncThunk(
  "workoutList/fetchWorkoutList",
  async (params) => {
    try {
      const response = await axios.post(
        `${Config.API_URL}/exercise/exercises`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const workoutListSlice = createSlice({
  name: "workoutList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkoutList.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWorkoutList.fulfilled, (state, action) => {
        state.loading = false;
        state.workoutList = action.payload;
      })
      .addCase(fetchWorkoutList.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default workoutListSlice.reducer;
