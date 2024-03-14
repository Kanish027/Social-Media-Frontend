import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the updateSlice
const initialState = {};

// Create a slice for managing state related to updating profiles
export const updateSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {
    // Reducer for requesting profile update
    updateProfileRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting profile update
    },
    // Reducer for successfully updating profile
    updateProfileSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after updating profile
      state.message = action.payload; // Store success message in state
    },
    // Reducer for failure to update profile
    updateProfileFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to update profile
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} = updateSlice.actions;

// Export the reducer
export default updateSlice.reducer;
