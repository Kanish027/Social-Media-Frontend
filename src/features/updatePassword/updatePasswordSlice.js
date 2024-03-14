import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the updatePasswordSlice
const initialState = {};

// Create a slice for managing state related to updating password
export const updatePasswordSlice = createSlice({
  name: "updatePassword",
  initialState,
  reducers: {
    // Reducer for requesting password update
    updatePasswordRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting password update
    },
    // Reducer for successfully updating password
    updatePasswordSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after updating password
      state.message = action.payload; // Store success message in state
    },
    // Reducer for failure to update password
    updatePasswordFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to update password
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const {
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFailure,
} = updatePasswordSlice.actions;

// Export the reducer
export default updatePasswordSlice.reducer;
