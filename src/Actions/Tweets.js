import axios from "axios";
import {
  TweetsOfFollowingsFailure,
  TweetsOfFollowingsRequest,
  TweetsOfFollowingsSuccess,
} from "../features/tweets/tweetSlice";

/**
 * Action creator for fetching tweets of followings.
 * Fetches tweets of users that the current user is following.
 */
const tweets = () => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of the request
    dispatch(TweetsOfFollowingsRequest());

    // Send GET request to fetch tweets of followings
    const { data } = await axios.get("/api/v1/users/tweets");

    // Dispatch action upon successful retrieval of tweets
    dispatch(TweetsOfFollowingsSuccess(data.tweets));
  } catch (error) {
    // Dispatch action upon failure to fetch tweets
    dispatch(TweetsOfFollowingsFailure(error.response.data.message));
  }
};

export { tweets };
