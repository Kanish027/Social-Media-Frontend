import axios from "axios";
import {
  followOrUnfollowFailure,
  followOrUnfollowRequest,
  followOrUnfollowSuccess,
} from "../features/followAndUnfollow/followUnfollowSlice";

/**
 * Action creator to follow or unfollow a user.
 */
const followOrUnfollow = (id) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of follow or unfollow process
    dispatch(followOrUnfollowRequest());

    // Make GET request to follow or unfollow the user
    const { data } = await axios.get(`/api/v1/users/follow/${id}`);

    // Dispatch action on successful follow or unfollow
    dispatch(followOrUnfollowSuccess(data.message));
  } catch (error) {
    // Dispatch action on failure to follow or unfollow user
    dispatch(followOrUnfollowFailure(error.response.data.message));
  }
};

export { followOrUnfollow };
