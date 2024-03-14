import axios from "axios";
import {
  retweetFailure,
  retweetRequest,
  retweetSuccess,
} from "../features/retweet/retweetSlice";

/**
 * Action creator for retweeting a tweet.
 */
const retweet = (id) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of the retweet request
    dispatch(retweetRequest());

    // Send POST request to retweet the specified tweet
    const { data } = await axios.post(`/api/v1/tweets/tweet/retweet/${id}`);

    console.log(data);

    // Dispatch action upon successful retweet
    dispatch(retweetSuccess());
  } catch (error) {
    // Dispatch action upon failure to retweet
    dispatch(retweetFailure(error.response.data.message));
  }
};

export { retweet };
