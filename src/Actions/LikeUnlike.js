import axios from "axios";
import {
  likeOrUnlikeFailure,
  likeOrUnlikeRequest,
  likeOrUnlikeSuccess,
} from "../features/LikeAndUnlike/likeUnlikeSlice";

/**
 * Action creator to like or unlike a tweet.
 */
const likeOrUnlike = (id) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of like/unlike operation
    dispatch(likeOrUnlikeRequest());

    // Send POST request to like or unlike the tweet
    const { data } = await axios.post(`/api/v1/tweets/tweet/${id}`);

    // Dispatch action upon successful like/unlike operation
    dispatch(likeOrUnlikeSuccess(data.message));
  } catch (error) {
    // Dispatch action upon failure of like/unlike operation
    dispatch(likeOrUnlikeFailure(error.response.data.message));
  }
};

export { likeOrUnlike };
