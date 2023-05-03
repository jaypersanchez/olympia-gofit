import { configureStore } from '@reduxjs/toolkit';
import programReducer from './reducers';

const store = configureStore({
  reducer: {
    program: programReducer,
  },
});

export default store;
