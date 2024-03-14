import axios from "axios";
import {
  UpdateTweetFailure,
  UpdateTweetRequest,
  UpdateTweetSuccess,
} from "../features/updateTweet/updateTweet";

/**
 * Action creator for updating a tweet's caption.
 * Sends a PUT request to update the caption of a tweet.
 */
const updateTweet = (id, caption) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of the update request
    dispatch(UpdateTweetRequest());

    // Send PUT request to update the tweet caption
    const { data } = await axios.put(
      `/api/v1/tweets/tweet/${id}`,
      {
        content: caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    // Dispatch action upon successful update
    dispatch(UpdateTweetSuccess(data.message));
  } catch (error) {
    // Dispatch action upon failure to update tweet
    dispatch(UpdateTweetFailure(error.response.data.message));
  }
};

export { updateTweet };
