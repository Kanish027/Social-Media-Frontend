import axios from "axios";
import {
  addCommentFailure,
  addCommentRequest,
  addCommentSuccess,
  deleteCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
} from "../features/comments/commentSlice";

/**
 * Action creator to add a comment to a tweet.
 */
const addComments = (id, commentValue) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of adding a comment
    dispatch(addCommentRequest());

    // Make PUT request to add a comment to the tweet
    const { data } = await axios.put(
      `/api/v1/tweets/comment/${id}`,
      { comment: commentValue },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Dispatch action on successful addition of the comment
    dispatch(addCommentSuccess(data.message));
  } catch (error) {
    // Dispatch action on failure to add the comment
    dispatch(addCommentFailure(error.response.data.message));
  }
};

/**
 * Action creator to delete a comment from a tweet.
 */
const deleteComment = (id, commentId) => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of deleting a comment
    dispatch(deleteCommentRequest());

    // Make DELETE request to delete the comment from the tweet
    const { data } = await axios.delete(`/api/v1/tweets/comment/${id}`, {
      data: { commentId },
    });

    // Dispatch action on successful deletion of the comment
    dispatch(deleteCommentSuccess(data.message));
  } catch (error) {
    // Dispatch action on failure to delete the comment
    dispatch(deleteCommentFailure(error.response.data.message));
  }
};

export { addComments, deleteComment };
