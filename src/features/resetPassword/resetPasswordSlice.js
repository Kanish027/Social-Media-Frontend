import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the resetPassword slice
const initialState = {};

// Create a slice for managing state related to resetting password
export const resetPasswordSlice = createSlice({
  name: "reset-password",
  initialState,
  reducers: {
    // Reducer for requesting to reset password
    resetPasswordRequest: (state) => {
      state.isLoading = true; // Set loading state to true when resetting password
    },
    // Reducer for successfully resetting password
    resetPasswordSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after resetting password
      state.message = action.payload; // Store success message in state
    },
    // Reducer for failure to reset password
    resetPasswordFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to reset password
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} = resetPasswordSlice.actions;

// Export the reducer
export default resetPasswordSlice.reducer;
