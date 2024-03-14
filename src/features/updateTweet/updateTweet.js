import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the updateTweetSlice
const initialState = {};

// Create a slice for managing state related to updating tweets
export const updateTweetSlice = createSlice({
  name: "updateTweet",
  initialState,
  reducers: {
    // Reducer for requesting tweet update
    UpdateTweetRequest: (state) => {
      state.isLoading = true; // Set loading state to true when requesting tweet update
    },
    // Reducer for successfully updating tweet
    UpdateTweetSuccess: (state, action) => {
      state.isLoading = false; // Set loading state to false after updating tweet
      state.message = action.payload; // Store success message in state
    },
    // Reducer for failure to update tweet
    UpdateTweetFailure: (state, action) => {
      state.isLoading = false; // Set loading state to false upon failure to update tweet
      state.error = action.payload; // Store error message in state
    },
  },
});

// Export action creators
export const { UpdateTweetRequest, UpdateTweetSuccess, UpdateTweetFailure } =
  updateTweetSlice.actions;

// Export the reducer
export default updateTweetSlice.reducer;
