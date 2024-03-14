import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the userProfileSlice
const initialState = {};

// Create a slice for managing state related to user profiles
export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    // Reducer for requesting user profile data
    GetUserProfileRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting user profile
    },
    // Reducer for successfully fetching user profile data
    GetUserProfileSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after fetching user profile
      state.user = action.payload; // Store user profile data in state
    },
    // Reducer for failure to fetch user profile data
    GetUserProfileFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to fetch user profile
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const {
  GetUserProfileRequest,
  GetUserProfileSuccess,
  GetUserProfileFailure,
} = userProfileSlice.actions;

// Export the reducer
export default userProfileSlice.reducer;
