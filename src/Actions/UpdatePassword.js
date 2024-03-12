import axios from "axios";
import {
  updatePasswordFailure,
  updatePasswordRequest,
  updatePasswordSuccess,
} from "../features/updatePassword/updatePasswordSlice";

const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch(updatePasswordRequest());

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
    console.log(data.message);
    dispatch(updatePasswordSuccess(data.message));
  } catch (error) {
    dispatch(updatePasswordFailure(error.response.data.message));
  }
};

export { updatePassword };
