import axios from "axios";
import {
  GetMyTweetsFailure,
  GetMyTweetsSuccess,
} from "../features/myTweets/myTweetsSlice";
import { GetAllUsersRequest } from "../features/Users/userSlice";

const getMyTweets = () => async (dispatch) => {
  try {
    dispatch(GetAllUsersRequest());

    const { data } = await axios.get("/api/v1/users/my/tweets");

    console.log(data.tweets);

    dispatch(GetMyTweetsSuccess(data.tweets));
  } catch (error) {
    dispatch(GetMyTweetsFailure(error.response.data.message));
  }
};

export { getMyTweets };
