import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the follow/unfollow slice
const initialState = {};

// Create a slice for managing follow/unfollow related state
export const followOrUnfollowSlice = createSlice({
  name: "followOrUnfollow",
  initialState,
  reducers: {
    // Reducer for follow/unfollow request
    followOrUnfollowRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for follow/unfollow success
    followOrUnfollowSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    // Reducer for follow/unfollow failure
    followOrUnfollowFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Export action creators
export const {
  followOrUnfollowRequest,
  followOrUnfollowSuccess,
  followOrUnfollowFailure,
} = followOrUnfollowSlice.actions;

// Export the reducer
export default followOrUnfollowSlice.reducer;
