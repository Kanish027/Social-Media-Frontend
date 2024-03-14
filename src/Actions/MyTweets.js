import axios from "axios";
import {
  GetMyTweetsFailure,
  GetMyTweetsSuccess,
} from "../features/myTweets/myTweetsSlice";
import { GetAllUsersRequest } from "../features/Users/userSlice";

/**
 * Action creator to fetch tweets belonging to the authenticated user.
 */
const getMyTweets = () => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of fetching user tweets
    dispatch(GetAllUsersRequest());

    // Send GET request to fetch user tweets
    const { data } = await axios.get("/api/v1/users/my/tweets");

    // Dispatch action upon successful retrieval of user tweets
    dispatch(GetMyTweetsSuccess(data.tweets));
  } catch (error) {
    // Dispatch action upon failure to fetch user tweets
    dispatch(GetMyTweetsFailure(error.response.data.message));
  }
};

export { getMyTweets };
