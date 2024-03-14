import axios from "axios";
import {
  GetUserProfileFailure,
  GetUserProfileRequest,
  GetUserProfileSuccess,
} from "../features/userProfile/useProfileSlice";

/**
 * Action creator for fetching user profile data by ID.
 * Sends a GET request to retrieve user profile information.
 */
const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch(GetUserProfileRequest());
    const { data } = await axios.get(`/api/v1/users/profile/${id}`);
    dispatch(GetUserProfileSuccess(data.user));
  } catch (error) {
    dispatch(GetUserProfileFailure(error.response.data.message));
  }
};

export { getUserProfile };
