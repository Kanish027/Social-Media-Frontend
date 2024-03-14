import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../Actions/Comment";
import { tweets } from "../Actions/Tweets";
import { getMyTweets } from "../Actions/MyTweets";
import { getUserTweets } from "../Actions/UserTweets";
import { Link, useParams } from "react-router-dom";

// Define the Comments component
const Comments = ({
  comment,
  userId,
  username,
  avatar,
  commentId,
  tweetId,
  isAccount,
}) => {
  // Extract user data from Redux store
  const { user } = useSelector((state) => state.user);

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Extract user ID from URL parameters
  const { id } = useParams();

  // Function to handle comment deletion
  const handleDeleteComment = async () => {
    await dispatch(deleteComment(tweetId, commentId)); // Delete the comment
    dispatch(tweets()); // Refresh all tweets
    dispatch(getMyTweets()); // Refresh current user's tweets
    dispatch(getUserTweets(id)); // Refresh user's tweets
  };

  // Render the comment with user avatar, username, and delete button if applicable
  return (
    <div className="container">
      <div className="d-flex align-items-center gap-2">
        <div>
          <Avatar src={avatar}></Avatar> {/* Display user avatar */}
        </div>
        {/* Display username */}
        <Link
          to={`/profile/${userId}`}
          className="text-decoration-none text-dark"
        >
          <div>{username}</div>
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="my-0 ps-5">{comment}</div> {/* Display comment */}
        {isAccount ? ( // If viewing own account or authorized to delete
          <button className="btn btn-sm" onClick={handleDeleteComment}>
            <i className="fa-solid fa-trash"></i>{" "}
            {/* Button to delete comment */}
          </button>
        ) : userId === user._id ? ( // If user is comment owner, display delete button
          <button className="btn btn-sm" onClick={handleDeleteComment}>
            <i className="fa-solid fa-trash"></i>{" "}
            {/* Button to delete comment */}
          </button>
        ) : null}
      </div>
    </div>
  );
};

// Export the Comments component
export default Comments;
