import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const deleteTweetSlice = createSlice({
  name: "deleteTweet",
  initialState,
  reducers: {
    DeleteTweetRequest: (state) => {
      state.isLoading = true;
    },
    DeleteTweetSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    DeleteTweetFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { DeleteTweetRequest, DeleteTweetSuccess, DeleteTweetFailure } =
  deleteTweetSlice.actions;

export default deleteTweetSlice.reducer;
