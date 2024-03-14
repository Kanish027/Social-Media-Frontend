import axios from "axios";
import {
  DeleteTweetFailure,
  DeleteTweetRequest,
  DeleteTweetSuccess,
} from "../features/deleteTweets/deleteTweetSlice";

/**
 * Action creator to delete a tweet.
 * @param {string} id - The ID of the tweet to be deleted.
 */
const deleteTweet = (id) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of tweet deletion process
    dispatch(DeleteTweetRequest());

    // Make DELETE request to delete the tweet
    const { data } = await axios.delete(`/api/v1/tweets/tweet/${id}`);

    // Dispatch action on successful tweet deletion
    dispatch(DeleteTweetSuccess(data.message));
  } catch (error) {
    // Dispatch action on failure to delete tweet
    dispatch(DeleteTweetFailure());
  }
};

export { deleteTweet };
