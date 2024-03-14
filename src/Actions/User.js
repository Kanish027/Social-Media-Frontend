import axios from "axios";
import Swal from "sweetalert2";
import {
  LoadUserFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoginUserFailure,
  LoginUserRequest,
  LoginUserSuccess,
  RegisterUserFailure,
  RegisterUserRequest,
  RegisterUserSuccess,
} from "../features/auth/authSlice";
import {
  NewTweetFailure,
  NewTweetRequest,
  NewTweetSuccess,
} from "../features/newTweet/newTweetSlice";

/**
 * Action creator for user login.
 * Sends a POST request to authenticate user login.
 */
const login = (email, password) => async (dispatch) => {
  try {
    dispatch(LoginUserRequest());
    const { data } = await axios.post(
      "/api/v1/users/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(LoginUserSuccess(data.user));
    // Show success message using SweetAlert2
    Swal.fire({
      title: data.message,
      text: "Have a good time!",
      icon: "success",
      confirmButtonText: "OK",
    });
  } catch (error) {
    dispatch(LoginUserFailure(error.response.data.message));
    // Show error message using SweetAlert2
    Swal.fire({
      title: error.response.data.message,
      text: "Please enter correct password",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

/**
 * Action creator for user registration.
 * Sends a POST request to register a new user.
 */
const register =
  (name, username, email, avatar, password) => async (dispatch) => {
    try {
      dispatch(RegisterUserRequest());
      const { data } = await axios.post(
        "/api/v1/users/new",
        {
          name: name,
          email: email,
          username: username,
          avatar: avatar,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(RegisterUserSuccess(data.data.savedUser));
      // Show success message using SweetAlert2
      Swal.fire({
        title: data.message,
        text: "Thank you!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      dispatch(RegisterUserFailure(error.response.data.message));
      // Show error message using SweetAlert2
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

/**
 * Action creator for loading user profile.
 * Sends a GET request to fetch user profile data.
 */
const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest());
    const { data } = await axios.get("/api/v1/users/profile/me");
    dispatch(LoadUserSuccess(data.user));
  } catch (error) {
    dispatch(LoadUserFailure(error.response.data.message));
  }
};

/**
 * Action creator for creating a new tweet.
 * Sends a POST request to create a new tweet.
 */
const newTweet = (caption, image) => async (dispatch) => {
  try {
    dispatch(NewTweetRequest());
    const { data } = await axios.post(
      "/api/v1/tweets/tweet",
      {
        content: caption,
        image: image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(NewTweetSuccess(data.message));
  } catch (error) {
    console.error(error);
    dispatch(NewTweetFailure(error.response.data.message));
  }
};

export { loadUser, login, newTweet, register };
