import axios from "axios";
import {
  retweetFailure,
  retweetRequest,
  retweetSuccess,
} from "../features/retweet/retweetSlice";

const retweet = (id) => async (dispatch) => {
  try {
    dispatch(retweetRequest());

    const { data } = await axios.post(`/api/v1/tweets/tweet/retweet/${id}`);

    console.log(data);

    dispatch(retweetSuccess());
  } catch (error) {
    dispatch(retweetFailure(error.response.data.message));
  }
};

export { retweet };
