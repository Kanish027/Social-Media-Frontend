import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the tweetSlice
const initialState = {};

// Create a slice for managing state related to tweets
export const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    // Reducer for requesting tweets of followings
    TweetsOfFollowingsRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting tweets
    },
    // Reducer for successfully fetching tweets of followings
    TweetsOfFollowingsSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after fetching tweets
      state.tweet = action.payload; // Store fetched tweets in state
    },
    // Reducer for failure to fetch tweets of followings
    TweetsOfFollowingsFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to fetch tweets
      state.error = action.payload; // Store error message in state
    },
    // Reducer for clearing errors
    clearErrors: (state) => {
      state.error = null; // Clear any existing error message in state
    },
  },
});

// Export action creators
export const {
  TweetsOfFollowingsRequest,
  TweetsOfFollowingsSuccess,
  TweetsOfFollowingsFailure,
  clearErrors,
} = tweetSlice.actions;

// Export the reducer
export default tweetSlice.reducer;
