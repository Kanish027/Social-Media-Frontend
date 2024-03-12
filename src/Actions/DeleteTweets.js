import axios from "axios";
import {
  DeleteTweetFailure,
  DeleteTweetRequest,
  DeleteTweetSuccess,
} from "../features/deleteTweets/deleteTweetSlice";

const deleteTweet = (id) => async (dispatch) => {
  try {
    dispatch(DeleteTweetRequest());

    const { data } = await axios.delete(`/api/v1/tweets/tweet/${id}`);

    console.log(data);

    dispatch(DeleteTweetSuccess(data.message));
  } catch (error) {
    dispatch(DeleteTweetFailure());
  }
};

export { deleteTweet };
