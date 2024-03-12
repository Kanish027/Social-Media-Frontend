import axios from "axios";
import {
  updateProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
} from "../features/updateProfile/updateSlice";

const updateProfile =
  (email, name, address, dob, avatar) => async (dispatch) => {
    try {
      console.log(avatar)
      dispatch(updateProfileRequest());
      const { data } = await axios.put(
        "/api/v1/users/update/profile",
        {
          email: email,
          name: name,
          location: address,
          dob: dob,
          avatar: avatar,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(updateProfileSuccess(data.message));
    } catch (error) {
      dispatch(updateProfileFailure(error.response.data.message));
    }
  };

export { updateProfile };
