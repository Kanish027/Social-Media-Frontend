import axios from "axios";
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "../features/resetPassword/resetPasswordSlice";

const resetPassword = (token, newPassword) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());

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
    console.log(data.message);
    dispatch(resetPasswordSuccess());
  } catch (error) {
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};

export { resetPassword };
