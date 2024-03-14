import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the userSlice
const initialState = {};

// Create a slice for managing state related to users
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Reducer for requesting all users data
    GetAllUsersRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting all users
    },
    // Reducer for successfully fetching all users data
    GetAllUsersSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after fetching all users
      state.allUsers = action.payload; // Store all users data in state
    },
    // Reducer for failure to fetch all users data
    GetAllUsersFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to fetch all users
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const { GetAllUsersRequest, GetAllUsersSuccess, GetAllUsersFailure } =
  userSlice.actions;

// Export the reducer
export default userSlice.reducer;
