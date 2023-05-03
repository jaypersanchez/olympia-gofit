import { createReducer } from '@reduxjs/toolkit';
import { selectProgramFrequency } from './actions';

const initialState = {
  selectedProgramFrequency: '',
};

const programReducer = createReducer(initialState, (builder) => {
  builder.addCase(selectProgramFrequency, (state, action) => {
    state.selectedProgramFrequency = action.payload;
  });
});

export default programReducer;
