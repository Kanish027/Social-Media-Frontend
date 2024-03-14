import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the myTweet slice
const initialState = {};

// Create a slice for managing state related to user's tweets
export const myTweetSlice = createSlice({
  name: "myTweets",
  initialState,
  reducers: {
    // Reducer for requesting user's tweets
    GetMyTweetsRequest: (state) => {
      state.isLoading = true; // Set loading state to true while fetching tweets
    },
    // Reducer for successfully fetching user's tweets
    GetMyTweetsSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after fetching tweets
      state.myTweets = action.payload; // Store fetched tweets in state
    },
    // Reducer for failure to fetch user's tweets
    GetMyTweetsFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure
      state.error = action.payload; // Store error message in state
    },
    // Reducer for requesting to create a new tweet
    NewTweetRequest: (state, action) => {
      state.isLoading = true; // Set loading state to true when creating new tweet
    },
    // Reducer for successfully creating a new tweet
    NewTweetSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after creating new tweet
      state.message = action.payload; // Store success message in state
    },
    // Reducer for failure to create a new tweet
    NewTweetFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to create new tweet
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const {
  GetMyTweetsRequest,
  GetMyTweetsSuccess,
  GetMyTweetsFailure,
  NewTweetRequest,
  NewTweetSuccess,
  NewTweetFailure,
} = myTweetSlice.actions;

// Export the reducer
export default myTweetSlice.reducer;
