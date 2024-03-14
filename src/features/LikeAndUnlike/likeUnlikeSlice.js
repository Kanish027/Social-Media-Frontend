import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the like and unlike slice
const initialState = {};

// Create a slice for managing like and unlike related state
export const likeUnlikeSlice = createSlice({
  name: "likeAndUnlike",
  initialState,
  reducers: {
    // Reducer for like or unlike request
    likeOrUnlikeRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for like or unlike success
    likeOrUnlikeSuccess: (state, action) => {
      state.isLoading = false;
      state.likeStatus = action.payload;
    },
    // Reducer for like or unlike failure
    likeOrUnlikeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Export action creators
export const { likeOrUnlikeRequest, likeOrUnlikeSuccess, likeOrUnlikeFailure } =
  likeUnlikeSlice.actions;

// Export the reducer
export default likeUnlikeSlice.reducer;
