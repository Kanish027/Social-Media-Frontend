import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addCommentRequest: (state) => {
      state.isLoading = true;
    },
    addCommentSuccess: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    addCommentFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteCommentRequest: (state) => {
      state.isLoading = true;
    },
    deleteCommentSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteCommentFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addCommentRequest,
  addCommentSuccess,
  addCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
} = commentSlice.actions;

export default commentSlice.reducer;
