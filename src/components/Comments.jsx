import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../Actions/Comment";
import { tweets } from "../Actions/Tweets";
import { getMyTweets } from "../Actions/MyTweets";
import { getUserTweets } from "../Actions/UserTweets";
import { useParams } from "react-router-dom";

const Comments = ({
  comment,
  userId,
  username,
  avatar,
  commentId,
  tweetId,
  isAccount,
}) => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { id } = useParams();

  const handleDeleteComment = async () => {
    await dispatch(deleteComment(tweetId, commentId));
    dispatch(tweets());
    dispatch(getMyTweets());
    dispatch(getUserTweets(id));
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-2">
        <div>
          <Avatar src={avatar}></Avatar>
        </div>
        <div>{username}</div>
      </div>
      <div className="d-flex justify-content-between align-items-start">
        <div className="my-0 ps-5">{comment}</div>
        {isAccount ? (
          <button className="btn btn-sm" onClick={handleDeleteComment}>
            <i className="fa-solid fa-trash"></i>
          </button>
        ) : userId === user._id ? (
          <button className="btn btn-sm" onClick={handleDeleteComment}>
            <i className="fa-solid fa-trash"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Comments;
