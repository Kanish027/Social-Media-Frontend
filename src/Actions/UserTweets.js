import axios from "axios";
import {
  GetUserTweetsFailure,
  GetUserTweetsRequest,
  GetUserTweetsSuccess,
} from "../features/usersTweets/userTweetsSlice";

/**
 * Action creator for fetching tweets of a specific user.
 * Sends a GET request to retrieve tweets belonging to the user with the specified ID.
 */
const getUserTweets = (id) => async (dispatch) => {
  try {
    dispatch(GetUserTweetsRequest());
    const { data } = await axios.get(`/api/v1/users/user/tweets/${id}`);
    dispatch(GetUserTweetsSuccess(data.tweets));
  } catch (error) {
    dispatch(GetUserTweetsFailure(error.response.data.message));
  }
};

export { getUserTweets };
