import axios from "axios";
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "../features/resetPassword/resetPasswordSlice";

/**
 * Action creator to reset user password.
 */
const resetPassword = (token, newPassword) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of the password reset request
    dispatch(resetPasswordRequest());

    // Send PUT request to reset user password
    const { data } = await axios.put(
      `/api/v1/users/reset/password/${token}`,
      {
        password: newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Dispatch action upon successful password reset
    dispatch(resetPasswordSuccess(data.message));
  } catch (error) {
    // Dispatch action upon failure to reset password
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};

export { resetPassword };
