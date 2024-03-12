import {
  UpdateTweetFailure,
  UpdateTweetRequest,
  UpdateTweetSuccess,
} from "../features/updateTweet/updateTweet";
import axios from "axios";

const updateTweet = (id, caption) => async (dispatch) => {
  try {
    dispatch(UpdateTweetRequest());
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
    dispatch(UpdateTweetSuccess(data.message));
  } catch (error) {
    dispatch(UpdateTweetFailure(error.response.data.message));
  }
};

export { updateTweet };
