import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserProfile } from "../Actions/UserProfile";
import { getUserTweets } from "../Actions/UserTweets";
import Tweets from "./Tweets";
import Followers from "./Followers";
import FollowingsUser from "./FollowingsUser";
import { followOrUnfollow } from "../Actions/FollowUnfollow";
import { format, parseISO } from "date-fns";

// Component for displaying user profile details and tweets
const UserProfile = () => {
  // States for controlling modals and follow state
  const [showFollowings, setShowFollowings] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [follow, setFollow] = useState(false);

  // Functions to handle modal visibility
  const handleCloseFollowings = () => setShowFollowings(false);
  const handleShowFollowings = () => setShowFollowings(true);
  const handleCloseFollowers = () => setShowFollowers(false);
  const handleShowFollowers = () => setShowFollowers(true);

  // Redux dispatcher
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux selectors
  const { user: me } = useSelector((state) => state.user);
  const { user, isLoading } = useSelector((state) => state.userProfile);
  const { tweets } = useSelector((state) => state.userTweets);

  // Params from React Router
  const { id } = useParams();

  // Effect to check if the current user is following the displayed user
  useEffect(() => {
    const currentUserID = user && me._id;

    if (user && user.followers) {
      const isFollowing =
        user &&
        user.followers.some((follower) => follower._id === currentUserID);
      setFollow(isFollowing);
    }
  }, [user, me._id]);

  // Function to handle follow/unfollow
  const handleFollow = async () => {
    setFollow(!follow);
    await dispatch(followOrUnfollow(id));
    dispatch(getUserProfile(id));
  };

  // Fetch user profile and tweets on component mount
  useEffect(() => {
    dispatch(getUserProfile(id));
    dispatch(getUserTweets(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <h2 className="m-3">Loading...</h2>
      ) : (
        <div className="container-fluid border">
          {/* User details */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center gap-5 mx-2">
              <button className="btn p-0" onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
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
          </div>

          {/* Profile picture and follow button */}
          <div className="d-flex justify-content-between align-items-center mx-2 pt-5 mt-5">
            <div>
              <Avatar
                src={user && user.avatar ? user.avatar.avatar_url : null}
                sx={{ width: 120, height: 120 }}
              ></Avatar>
            </div>
            <div>
              <button
                onClick={handleFollow}
                className={
                  user && follow
                    ? "btn bg-dark text-light border border-dark rounded-5 px-3 fw-semibold mt-4"
                    : "btn text-dark border border-dark rounded-5 px-3 fw-semibold mt-4"
                }
              >
                {follow ? "Following" : "Follow"}
              </button>
            </div>
          </div>

          {/* User name and username */}
          <div className="mx-2 mt-3 mb-2">
            <h4 className="mb-0">{user && user.name}</h4>
            <p className="text-secondary mb-0">@{user && user.username}</p>
          </div>

          {/* Additional user details */}
          {(user && user.dob) ||
          (user && user.location) ||
          (user && user.createdAt) ? (
            <div className="mx-2 mb-2 text-secondary d-flex gap-4 align-items-center">
              {user && user.location ? (
                <div className="d-flex align-items-center gap-2">
                  <small>
                    <i className="fa-solid fa-location-dot"></i>
                  </small>
                  <div>{user.location}</div>
                </div>
              ) : null}
              {user && user.dob ? (
                <div className="d-flex align-items-center gap-2">
                  <small>
                    <i className="fa-solid fa-cake-candles"></i>
                  </small>
                  <div>Born {format(parseISO(user.dob), "MMMM d, yyyy")}</div>
                </div>
              ) : null}
              {user && user.createdAt ? (
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <small>
                      <i className="fa-regular fa-calendar"></i>
                    </small>
                    <div>
                      Joined {format(parseISO(user.createdAt), "MMMM yyyy")}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Followings and Followers count */}
          <div className="mx-2 d-flex gap-4">
            <div>
              <span className="fw-semibold">
                {user && user.followings.length}
              </span>{" "}
              <button className="btn p-0" onClick={handleShowFollowings}>
                <small className="text-secondary">Followings</small>
              </button>
            </div>
            <div>
              <span className="fw-semibold">
                {user && user.followers.length}
              </span>{" "}
              <button className="btn p-0" onClick={handleShowFollowers}>
                <small className="text-secondary">Followers</small>
              </button>
            </div>
          </div>

          {/* User tweets */}
          <div className="my-3">
            <h4 className=" justify-content-center d-flex  border-bottom py-2">
              Tweets
            </h4>
            <div>
              {tweets && tweets.length > 0 ? (
                <>
                  {tweets.map((tweet) => {
                    console.log(tweet);
                    return (
                      <Tweets
                        key={tweet._id}
                        tweetId={tweet._id}
                        tweetImage={tweet.image}
                        tweetCaption={tweet.content}
                        tweetedBy={user.name}
                        username={user.username}
                        avatar={user.avatar}
                        likes={tweet.likes}
                        comments={tweet.comments}
                        retweetedBy={tweet.retweetedBy}
                        isAccount={false}
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

          {/* Modals for displaying followers and followings */}
          <>
            <Modal show={showFollowers} onHide={handleCloseFollowers} centered>
              <Modal.Header>
                <Modal.Title>Followers</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {user && user.followers && user.followers.length > 0 ? (
                  <>
                    {user.followers.map((follower) => {
                      return (
                        <Followers
                          key={follower._id}
                          id={follower._id}
                          name={follower.name}
                          username={follower.username}
                          avatar={follower.avatar}
                          handleCloseFollowers={handleCloseFollowers}
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
          </>

          <>
            <Modal
              show={showFollowings}
              onHide={handleCloseFollowings}
              centered
            >
              <Modal.Header>
                <Modal.Title>Followings</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {user && user.followings && user.followings.length > 0 ? (
                  <>
                    {user.followings.map((following) => {
                      return (
                        <FollowingsUser
                          key={following._id}
                          id={following._id}
                          name={following.name}
                          username={following.username}
                          avatar={following.avatar}
                          handleCloseFollowings={handleCloseFollowings}
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
          </>
        </div>
      )}
    </>
  );
};

export default UserProfile;
