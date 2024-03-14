import axios from "axios";
import {
  updatePasswordFailure,
  updatePasswordRequest,
  updatePasswordSuccess,
} from "../features/updatePassword/updatePasswordSlice";

/**
 * Action creator for updating user's password.
 * Sends a PUT request to update the user's password.
 * @param {string} oldPassword - The user's old password.
 * @param {string} newPassword - The new password to be set.
 */
const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of the request
    dispatch(updatePasswordRequest());

    // Send PUT request to update the password
    const { data } = await axios.put(
      "/api/v1/users/update/password",
      {
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    // Log success message and dispatch action upon successful update
    console.log(data.message);
    dispatch(updatePasswordSuccess(data.message));
  } catch (error) {
    // Dispatch action upon failure to update password
    dispatch(updatePasswordFailure(error.response.data.message));
  }
};

export { updatePassword };
