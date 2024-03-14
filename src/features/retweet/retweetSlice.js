import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const retweetSlice = createSlice({
  name: "retweet",
  initialState,
  reducers: {
    retweetRequest: (state) => {
      state.isLoading = true;
    },
    retweetSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    retweetFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { retweetRequest, retweetSuccess, retweetFailure } =
  retweetSlice.actions;

export default retweetSlice.reducer;
