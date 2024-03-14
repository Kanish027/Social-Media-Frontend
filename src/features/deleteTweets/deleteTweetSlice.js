import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the delete tweet slice
const initialState = {};

// Slice for managing state related to deleting a tweet
export const deleteTweetSlice = createSlice({
  name: "deleteTweet",
  initialState,
  reducers: {
    // Reducer for delete tweet request
    DeleteTweetRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for delete tweet success
    DeleteTweetSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    // Reducer for delete tweet failure
    DeleteTweetFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { DeleteTweetRequest, DeleteTweetSuccess, DeleteTweetFailure } =
  deleteTweetSlice.actions;

// Export the reducer
export default deleteTweetSlice.reducer;
