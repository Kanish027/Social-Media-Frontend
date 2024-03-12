import axios from "axios";
import {
  TweetsOfFollowingsFailure,
  TweetsOfFollowingsRequest,
  TweetsOfFollowingsSuccess,
} from "../features/tweets/tweetSlice";

const tweets = () => async (dispatch) => {
  try {
    dispatch(TweetsOfFollowingsRequest());
    const { data } = await axios.get("/api/v1/users/tweets");
    dispatch(TweetsOfFollowingsSuccess(data.tweets));
  } catch (error) {
    dispatch(TweetsOfFollowingsFailure(error.response.data.message));
  }
};

export { tweets };
