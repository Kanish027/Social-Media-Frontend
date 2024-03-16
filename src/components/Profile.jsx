import { Avatar } from "@mui/material";
import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyTweets } from "../Actions/MyTweets";
import EditProfile from "./EditProfile";
import Followers from "./Followers";
import FollowingsUser from "./FollowingsUser";
import Settings from "./Settings";
import Tweets from "./Tweets";
import { loadUser } from "../Actions/User";

// Component for rendering user profile details and tweets
const Profile = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.user);
  const { myTweets, isLoading: tweetLoading } = useSelector(
    (state) => state.myTweets
  );
  const [showFollowings, setShowFollowings] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const handleCloseFollowings = () => setShowFollowings(false);
  const handleShowFollowings = () => setShowFollowings(true);
  const handleCloseFollowers = () => setShowFollowers(false);
  const handleShowFollowers = () => setShowFollowers(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseSettings = () => setShowSettings(false);
  const handleShowSettings = () => setShowSettings(true);
  const dispatch = useDispatch();

  // Fetch user data and tweets on component mount
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getMyTweets());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h2 className="my-5">Loading...</h2>
      ) : (
        <div className="container-fluid border">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-5 mx-2">
              {/* Back button */}
              <button className="btn p-0" onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              {/* User info */}
              <div>
                <div className="mt-2">
                  <h5 className="fw-semibold mb-0">{user && user.name}</h5>
                </div>
                <div>
                  <small className="text-secondary">
                    {user && user.tweets.length} Posts
                  </small>
                </div>
              </div>
            </div>
            {/* Settings button */}
            <div
              className="mx-2"
              onClick={handleShowSettings}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>

          {/* Profile Image and Edit Profile Button */}
          <div className="d-flex justify-content-between align-items-center mx-2 pt-5 mt-5">
            <div>
              <Avatar
                sx={{ width: 120, height: 120 }}
                src={user && user.avatar ? user.avatar.avatar_url : null}
              ></Avatar>
            </div>
            <div>
              <button
                onClick={handleShowEdit}
                className="btn btn-outline-secondary text-dark border border-dark rounded-5 px-3 fw-semibold mt-4"
              >
                Edit profile
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="mx-2 mt-3 mb-2">
            <h4 className="mb-0">{user && user.name}</h4>
            <p className="text-secondary mb-0">@{user && user.username}</p>
          </div>

          {/* Location, DOB, and Joined */}
          {(user && user.dob) ||
          (user && user.location) ||
          (user && user.createdAt) ? (
            <div className="mx-2 mb-2 text-secondary d-flex gap-4 align-items-center">
              {/* Location */}
              {user && user.location && (
                <div className="d-flex align-items-center gap-2">
                  <small>
                    <i className="fa-solid fa-location-dot"></i>
                  </small>
                  <div>{user.location}</div>
                </div>
              )}
              {/* Date of Birth */}
              {user && user.dob && (
                <div className="d-flex align-items-center gap-2">
                  <small>
                    <i className="fa-solid fa-cake-candles"></i>
                  </small>
                  <div>Born {format(parseISO(user.dob), "MMMM d, yyyy")}</div>
                </div>
              )}
              {/* Joined Date */}
              <div>
                {user && user.createdAt && (
                  <div className="d-flex align-items-center gap-2">
                    <small>
                      <i className="fa-regular fa-calendar"></i>
                    </small>
                    <div>
                      Joined {format(parseISO(user.createdAt), "MMMM yyyy")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {/* Followers and Followings */}
          <div className="mx-2 d-flex gap-4">
            {/* Followings */}
            <div>
              <span className="fw-semibold">
                {user && user.followings.length}
              </span>{" "}
              <button className="btn p-0" onClick={handleShowFollowings}>
                <small className="text-secondary">Followings</small>
              </button>
            </div>
            {/* Followers */}
            <div>
              <span className="fw-semibold">
                {user && user.followers.length}
              </span>{" "}
              <button className="btn p-0" onClick={handleShowFollowers}>
                <small className="text-secondary">Followers</small>
              </button>
            </div>
          </div>

          {/* User Tweets */}
          {tweetLoading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="my-3">
              <h4 className="justify-content-center d-flex border-bottom py-2">
                Tweets
              </h4>
              <div>
                {myTweets && myTweets.length > 0 ? (
                  <>
                    {/* Display user tweets */}
                    {myTweets.map((tweet) => {
                      return (
                        <Tweets
                          key={tweet._id}
                          tweetId={tweet._id}
                          tweetImage={tweet.image}
                          tweetCaption={tweet.content}
                          tweetedBy={tweet.tweetedBy.name}
                          username={tweet.tweetedBy.username}
                          avatar={tweet.tweetedBy.avatar}
                          likes={tweet.likes}
                          comments={tweet.comments}
                          retweetedBy={tweet.retweetedBy}
                          isAccount={true}
                          date={tweet.createdAt}
                        />
                      );
                    })}
                  </>
                ) : (
                  <>No Tweets</>
                )}
              </div>
            </div>
          )}

          {/* Modal for displaying followings */}
          <Modal show={showFollowings} onHide={handleCloseFollowings} centered>
            <Modal.Header>
              <Modal.Title>Followings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Display followings */}
              {user && user.followings && user && user.followings.length > 0 ? (
                <>
                  {user &&
                    user.followings.map((following) => {
                      return (
                        <FollowingsUser
                          key={following._id}
                          avatar={following.avatar}
                          name={following.name}
                          username={following.username}
                        />
                      );
                    })}
                </>
              ) : (
                <>No Followings</>
              )}
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCloseFollowings}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>

          {/* Modal for displaying followers */}
          <Modal show={showFollowers} onHide={handleCloseFollowers} centered>
            <Modal.Header>
              <Modal.Title>Followers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Display followers */}
              {user && user.followers && user && user.followers.length > 0 ? (
                <>
                  {user &&
                    user.followers.map((follower) => {
                      return (
                        <Followers
                          key={follower._id}
                          avatar={follower.avatar}
                          name={follower.name}
                          username={follower.username}
                        />
                      );
                    })}
                </>
              ) : (
                <>No Followers</>
              )}
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCloseFollowers}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>

          {/* Modal for editing profile */}
          <Modal show={showEdit} onHide={handleCloseEdit} centered>
            <EditProfile handleCloseEdit={handleCloseEdit} />
          </Modal>

          {/* Modal for settings */}
          <Modal show={showSettings} onHide={handleCloseSettings} centered>
            <Modal.Header className="position-relative">
              <Modal.Title>Update Password</Modal.Title>
              <button
                onClick={handleCloseSettings}
                className="btn-sm btn rounded text-dark fs-4 rounded-5 position-absolute top-0 end-0"
              >
                <i className="fa-solid fa-xmark m-1"></i>
              </button>
            </Modal.Header>
            <Modal.Body>
              <Settings handleCloseSettings={handleCloseSettings} />
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Profile;
