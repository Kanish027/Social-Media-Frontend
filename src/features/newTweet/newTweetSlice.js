import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the newTweet slice
const initialState = {};

// Create a slice for managing state related to creating a new tweet
export const newTweetSlice = createSlice({
  name: "newTweet",
  initialState,
  reducers: {
    // Reducer for requesting to create a new tweet
    NewTweetRequest: (state) => {
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
export const { NewTweetRequest, NewTweetSuccess, NewTweetFailure } =
  newTweetSlice.actions;

// Export the reducer
export default newTweetSlice.reducer;
