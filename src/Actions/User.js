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
    console.log(data);
    dispatch(LoginUserSuccess(data.user));
    Swal.fire({
      title: data.message,
      text: "Have a good time!",
      icon: "success",
      confirmButtonText: "OK",
    });
  } catch (error) {
    dispatch(LoginUserFailure(error.response.data.message));
    Swal.fire({
      title: error.response.data.message,
      text: "Please enter correct password",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

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
      console.log(data);
      dispatch(RegisterUserSuccess(data.data.savedUser));
      Swal.fire({
        title: data.message,
        text: "Thank you!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      dispatch(RegisterUserFailure(error.response.data.message));
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest());
    const { data } = await axios.get("/api/v1/users/profile/me");
    dispatch(LoadUserSuccess(data.user));
  } catch (error) {
    dispatch(LoadUserFailure(error.response.data.message));
  }
};

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
    console.log(data);
    dispatch(NewTweetSuccess(data.message));
  } catch (error) {
    console.error(error);
    dispatch(NewTweetFailure(error.response.data.message));
  }
};

export { loadUser, login, newTweet, register };

