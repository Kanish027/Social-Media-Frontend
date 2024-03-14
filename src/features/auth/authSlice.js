import { createSlice } from "@reduxjs/toolkit";

// Initial state for the authentication slice
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

// Slice for managing authentication state
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer for login request
    LoginUserRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for login success
    LoginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Reducer for login failure
    LoginUserFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    // Reducer for register user request
    RegisterUserRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for register user success
    RegisterUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Reducer for register user failure
    RegisterUserFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    // Reducer for loading user request
    LoadUserRequest: (state) => {
      state.isLoading = true;
    },
    // Reducer for loading user success
    LoadUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Reducer for loading user failure
    LoadUserFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    // Reducer for clearing errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Export actions
export const {
  LoginUserSuccess,
  LoginUserRequest,
  LoginUserFailure,
  RegisterUserRequest,
  RegisterUserSuccess,
  RegisterUserFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFailure,
  clearErrors,
} = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
