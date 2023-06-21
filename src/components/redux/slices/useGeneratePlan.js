import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "react-native-config";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const postWorkoutPlan = createAsyncThunk(
  "generateWorkoutPlan/postWorkoutPlan",
  async (params) => {
    try {
      const response = await axios.put(
        `${Config.API_URL}/exercise/plan`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const workoutPlanrSlice = createSlice({
  name: "generateWorkoutPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postWorkoutPlan.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postWorkoutPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postWorkoutPlan.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default workoutPlanrSlice.reducer;
