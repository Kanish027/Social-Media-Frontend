import { Avatar } from "@mui/material";
import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addComments } from "../Actions/Comment";
import { deleteTweet } from "../Actions/DeleteTweets";
import { likeOrUnlike } from "../Actions/LikeUnlike";
import { getMyTweets } from "../Actions/MyTweets";
import { tweets } from "../Actions/Tweets";
import { loadUser } from "../Actions/User";
import { getUserTweets } from "../Actions/UserTweets";
import Comments from "./Comments";
import LikedUsers from "./LikedUsers";
import NewCaption from "./NewCaption";

const Tweets = ({
  tweetId,
  tweetedBy,
  avatar,
  tweetImage,
  username,
  tweetCaption,
  likes = [],
  comments = [],
  retweetedBy = [],
  isAccount = false,
  date,
}) => {
  const [liked, setLiked] = useState(false);

  const [show, setShow] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [showCaptionUpdate, setShowCaptionUpdate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseComments = () => setShowComments(false);
  const handleShowComments = () => setShowComments(true);

  const handleCloseUpdate = () => setShowCaptionUpdate(false);
  const handleShowUpdate = () => setShowCaptionUpdate(true);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.comments);

  const { id } = useParams();

  const handleLike = () => {
    setLiked((prev) => !prev);
    dispatch(likeOrUnlike(tweetId));
    if (isAccount) {
      dispatch(getMyTweets());
    } else {
      dispatch(tweets());
      dispatch(getUserTweets(id));
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    // Dispatch the addComments action
    await dispatch(addComments(tweetId, commentValue));

    // Fetch tweets after adding the comment
    if (!isAccount) {
      dispatch(tweets());
    }
    dispatch(getMyTweets());
    dispatch(getUserTweets(id));
    setCommentValue("");
  };

  useEffect(() => {
    const isUserLiked = likes.some((like) => like._id === user._id);
    setLiked(isUserLiked);
  }, [likes, user._id, tweetId]);

  const handleDeleteTweet = async () => {
    await dispatch(deleteTweet(tweetId));
    dispatch(loadUser());
    dispatch(getMyTweets());
  };

  return (
    <div className="card">
      <div className="d-flex justify-content-between  align-items-center p-3">
        <div className="d-flex align-items-center gap-2">
          <Avatar src={avatar ? avatar.avatar_url : null}></Avatar>
          <div>
            <div className="d-flex align-items-center gap-2">
              <h6 className="mb-0">{tweetedBy}</h6>
              <p className="text-secondary mb-0">@{username}</p>
              <span className="text-secondary">.</span>
              <small className="text-secondary">
                {format(parseISO(date), "MMM d")}
              </small>
            </div>
            <div>
              <small>{tweetCaption}</small>
            </div>
          </div>
        </div>
        {isAccount && (
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <i className="fa-solid fa-ellipsis"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={handleDeleteTweet}
                className="d-flex align-items-center gap-2 text-danger"
              >
                <div>
                  <i className="fa-regular fa-trash-can"></i>
                </div>
                <div>Delete</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleShowUpdate()}>
                Update Caption
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
      <div className="card-body py-0">
        {tweetImage && (
          <img src={tweetImage.url} className="card-img-top rounded-5" alt="" />
        )}
        <div className="d-flex justify-content-between py-2 px-4">
          <div onClick={handleShowComments}>
            <button className="btn px-1 ">
              <i className="fa-regular fa-comment text-secondary"></i>{" "}
            </button>
            <button className="btn px-1" style={{ fontSize: "14px" }}>
              {comments.length}
            </button>
          </div>
          <div className="d-flex align-items-center gap-0">
            <button className="btn px-1 ">
              <i className="fa-solid fa-retweet text-secondary"></i>{" "}
            </button>
            <button className="btn px-1" style={{ fontSize: "14px" }}>
              {retweetedBy.length}
            </button>
          </div>
          <div className="d-flex align-items-center gap-0">
            <button onClick={() => handleLike()} className="btn px-1 ">
              {liked ? (
                <i className="fa-solid fa-heart text-danger"></i>
              ) : (
                <i className="fa-regular fa-heart text-secondary"></i>
              )}{" "}
            </button>
            <button
              className="btn px-1"
              onClick={handleShow}
              style={{ fontSize: "14px" }}
              disabled={likes.length === 0 ? true : false}
            >
              {likes.length}
            </button>
          </div>
          <button className="btn d-flex align-items-center justify-content-center gap-1">
            <i className="fa-solid fa-chart-simple text-secondary"></i>{" "}
            <span style={{ fontSize: "14px" }}></span>
          </button>
        </div>
      </div>
      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Liked By</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {likes.map((like) => {
              return (
                <LikedUsers
                  key={like._id}
                  name={like.name}
                  avatar={like.avatar && like.avatar.avatar_url}
                  username={like.username}
                />
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-sm btn-secondary" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal show={showComments} onHide={handleCloseComments} centered>
          <Modal.Header>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddComment}>
              <div className="d-flex align-items-center gap-3">
                <div>
                  {user.avatar ? (
                    <Avatar src={user.avatar.avatar_url}></Avatar>
                  ) : (
                    <Avatar></Avatar>
                  )}
                </div>
                <div>
                  <textarea
                    className="form-control"
                    cols={50}
                    rows={3}
                    placeholder="Post a reply"
                    onChange={(e) => setCommentValue(e.target.value)}
                    value={commentValue}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  disabled={isLoading}
                  className="btn btn-primary btn-sm px-3 rounded-5 mt-3"
                >
                  Post
                </button>
              </div>
            </form>
            <div>
              {comments.length > 0 ? (
                comments.map((item) => {
                  return (
                    <Comments
                      key={item._id}
                      userId={item.user._id}
                      comment={item.comment}
                      name={item.user.name}
                      username={item.user.username}
                      avatar={item.user.avatar && item.user.avatar.avatar_url}
                      isAccount={isAccount}
                      tweetId={tweetId}
                      commentId={item._id}
                    />
                  );
                })
              ) : (
                <div>No Comment Yet</div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-sm btn-secondary"
              onClick={handleCloseComments}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal
          show={showCaptionUpdate}
          onHide={handleCloseUpdate}
          centered
          className=""
        >
          <Modal.Header className="position-relative">
            <Modal.Title>Update Caption</Modal.Title>
            <button
              onClick={handleCloseUpdate}
              className="btn-sm btn rounded text-dark fs-4 rounded-5 position-absolute top-0 end-0"
            >
              <i className="fa-solid fa-xmark m-1"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <NewCaption
              tweetId={tweetId}
              handleCloseUpdate={handleCloseUpdate}
            />
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Tweets;
