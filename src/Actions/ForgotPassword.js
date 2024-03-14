import axios from "axios";
import {
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
} from "../features/forgotPassword/forgotPasswordSlice";

/**
 * Action creator to request password reset for a user.
 */
const forgotPassword = (email) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of password reset request
    dispatch(forgotPasswordRequest());

    // Make POST request to initiate password reset
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

    // Dispatch action on successful password reset request
    dispatch(forgotPasswordSuccess(data.message));
  } catch (error) {
    // Dispatch action on failure to request password reset
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};

export { forgotPassword };
