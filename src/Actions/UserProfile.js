import axios from "axios";
import {
  GetUserProfileFailure,
  GetUserProfileRequest,
  GetUserProfileSuccess,
} from "../features/userProfile/useProfileSlice";

const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch(GetUserProfileRequest());
    const { data } = await axios.get(`/api/v1/users/profile/${id}`);
    console.log(data);
    dispatch(GetUserProfileSuccess(data.user));
  } catch (error) {
    dispatch(GetUserProfileFailure(error.response.data.message));
  }
};

export { getUserProfile };
