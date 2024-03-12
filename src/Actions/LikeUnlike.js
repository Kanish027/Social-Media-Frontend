import axios from "axios";
import {
  likeOrUnlikeFailure,
  likeOrUnlikeRequest,
  likeOrUnlikeSuccess,
} from "../features/LikeAndUnlike/likeUnlikeSlice";

const likeOrUnlike = (id) => async (dispatch) => {
  try {
    dispatch(likeOrUnlikeRequest());
    const { data } = await axios.post(`/api/v1/tweets/tweet/${id}`);
    dispatch(likeOrUnlikeSuccess(data.message));
  } catch (error) {
    dispatch(likeOrUnlikeFailure(error.response.data.message));
  }
};

export { likeOrUnlike };
