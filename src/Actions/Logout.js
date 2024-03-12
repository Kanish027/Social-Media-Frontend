import axios from "axios";
import {
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from "../features/logout/logoutSlice";

const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    await axios.get("/api/v1/users/logout");
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.response.data.message));
  }
};

export { logout };
