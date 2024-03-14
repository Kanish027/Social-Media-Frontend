import axios from "axios";
import {
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from "../features/logout/logoutSlice";

/**
 * Action creator to log out the user.
 */
const logout = () => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of the logout process
    dispatch(logoutRequest());

    // Send GET request to log out the user
    await axios.get("/api/v1/users/logout");

    // Dispatch action upon successful logout
    dispatch(logoutSuccess());
  } catch (error) {
    // Dispatch action upon failure of logout process
    dispatch(logoutFailure(error.response.data.message));
  }
};

export { logout };
