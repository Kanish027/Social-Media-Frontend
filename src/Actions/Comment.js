import axios from "axios";
import {
  addCommentFailure,
  addCommentRequest,
  addCommentSuccess,
  deleteCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
} from "../features/comments/commentSlice";

const addComments = (id, commentValue) => async (dispatch) => {
  try {
    dispatch(addCommentRequest());
    const { data } = await axios.put(
      `/api/v1/tweets/comment/${id}`,
      {
        comment: commentValue,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(addCommentSuccess(data.message));
  } catch (error) {
    dispatch(addCommentFailure(error.response.data.message));
  }
};

const deleteComment = (id, commentId) => async (dispatch) => {
  try {
    dispatch(deleteCommentRequest());

    const { data } = await axios.delete(`/api/v1/tweets/comment/${id}`, {
      data: { commentId },
    });
    dispatch(deleteCommentSuccess(data.message));
  } catch (error) {
    dispatch(deleteCommentFailure(error.response.data.message));
  }
};

export { addComments, deleteComment };
