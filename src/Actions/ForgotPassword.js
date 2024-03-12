import axios from "axios";
import {
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
} from "../features/forgotPassword/forgotPasswordSlice";

const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());

    const { data } = await axios.post(
      "/api/v1/users/forgot/password",
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(data.message);
    dispatch(forgotPasswordSuccess(data.message));
  } catch (error) {
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};

export { forgotPassword };
