import axios from "axios";
import {
  updateProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
} from "../features/updateProfile/updateSlice";

/**
 * Action creator for updating user's profile information.
 * Sends a PUT request to update the user's profile details.
 */
const updateProfile =
  (email, name, address, dob, avatar) => async (dispatch) => {
    try {
      // Log the avatar for debugging purposes
      console.log(avatar);

      // Dispatch action to indicate the start of the request
      dispatch(updateProfileRequest());

      // Send PUT request to update the profile
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

      // Dispatch action upon successful profile update
      dispatch(updateProfileSuccess(data.message));
    } catch (error) {
      // Dispatch action upon failure to update profile
      dispatch(updateProfileFailure(error.response.data.message));
    }
  };

export { updateProfile };
