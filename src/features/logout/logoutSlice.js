import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the logout slice
const initialState = {};

// Create a slice for managing logout related state
export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    // Reducer for logout request
    logoutRequest: (state) => {
      state.isLoading = true;
      state.isAuthenticated = true; // Assuming the user is still authenticated during logout process
    },
    // Reducer for logout success
    logoutSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null; // Clear user data upon successful logout
    },
    // Reducer for logout failure
    logoutFailure: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = true; // User remains authenticated upon logout failure
    },
  },
});

// Export action creators
export const { logoutRequest, logoutSuccess, logoutFailure } =
  logoutSlice.actions;

// Export the reducer
export default logoutSlice.reducer;
