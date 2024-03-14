import { createSlice } from "@reduxjs/toolkit";

// Initial state for the comment slice
const initialState = {
  isLoading: false,
  comment: null,
  message: null,
  error: null,
};

// Slice for managing comment-related state
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // Reducer for adding a comment request
    addCommentRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for adding a comment success
    addCommentSuccess: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    // Reducer for adding a comment failure
    addCommentFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Reducer for deleting a comment request
    deleteCommentRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for deleting a comment success
    deleteCommentSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    // Reducer for deleting a comment failure
    deleteCommentFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  addCommentRequest,
  addCommentSuccess,
  addCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure,
} = commentSlice.actions;

// Export the reducer
export default commentSlice.reducer;
