import axios from "axios";
import {
  GetUserTweetsFailure,
  GetUserTweetsRequest,
  GetUserTweetsSuccess,
} from "../features/usersTweets/userTweetsSlice";

const getUserTweets = (id) => async (dispatch) => {
  try {
    dispatch(GetUserTweetsRequest());

    const { data } = await axios.get(`/api/v1/users/user/tweets/${id}`);

    console.log(data);

    dispatch(GetUserTweetsSuccess(data.tweets));
  } catch (error) {
    dispatch(GetUserTweetsFailure(error.response.data.message));
  }
};

export { getUserTweets };
