import { createSlice } from "@reduxjs/toolkit";

// Initial state for the delete account slice
const initialState = {
  isLoading: false,
};

// Slice for managing delete account-related state
export const deleteAccountSlice = createSlice({
  name: "deleteAccount",
  initialState,
  reducers: {
    // Reducer for delete account request
    deleteAccountRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for delete account success
    deleteAccountSuccess: (state, action) => {
      state.isLoading = false;
    },
    // Reducer for delete account failure
    deleteAccountFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

// Export actions
export const {
  deleteAccountRequest,
  deleteAccountSuccess,
  deleteAccountFailure,
} = deleteAccountSlice.actions;

// Export the reducer
export default deleteAccountSlice.reducer;
