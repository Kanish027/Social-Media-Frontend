import axios from "axios";
import {
  followOrUnfollowFailure,
  followOrUnfollowRequest,
  followOrUnfollowSuccess,
} from "../features/followAndUnfollow/followUnfollowSlice";

const followOrUnfollow = (id) => async (dispatch) => {
  try {
    dispatch(followOrUnfollowRequest());
    const { data } = await axios.get(`/api/v1/users/follow/${id}`);
    dispatch(followOrUnfollowSuccess(data.message));
    console.log(data.message);
  } catch (error) {
    dispatch(followOrUnfollowFailure(error.response.data.message));
  }
};
export { followOrUnfollow };
