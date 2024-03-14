import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the userTweetsSlice
const initialState = {};

// Create a slice for managing state related to user tweets
export const userTweetsSlice = createSlice({
  name: "userTweets",
  initialState,
  reducers: {
    // Reducer for requesting user tweets data
    GetUserTweetsRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting user tweets
    },
    // Reducer for successfully fetching user tweets data
    GetUserTweetsSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after fetching user tweets
      state.tweets = action.payload; // Store user tweets data in state
    },
    // Reducer for failure to fetch user tweets data
    GetUserTweetsFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to fetch user tweets
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const {
  GetUserTweetsRequest,
  GetUserTweetsSuccess,
  GetUserTweetsFailure,
} = userTweetsSlice.actions;

// Export the reducer
export default userTweetsSlice.reducer;
