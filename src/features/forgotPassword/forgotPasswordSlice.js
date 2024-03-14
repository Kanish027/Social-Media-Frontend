import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the forgot password slice
const initialState = {};

// Create a slice for managing forgot password related state
export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    // Reducer for forgot password request
    forgotPasswordRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for forgot password success
    forgotPasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    // Reducer for forgot password failure
    forgotPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Export action creators
export const {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} = forgotPasswordSlice.actions;

// Export the reducer
export default forgotPasswordSlice.reducer;
