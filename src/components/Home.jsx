import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Actions/AllUsers";
import { tweets } from "../Actions/Tweets";
import FeedHeader from "./FeedHeader";
import Tweets from "./Tweets";
import NewTweet from "./NewTweet";

// Define the Home component
const Home = () => {
  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Retrieve tweet data from Redux store
  const { tweet } = useSelector((state) => state.tweet);

  // Fetch tweets and all users when component mounts
  useEffect(() => {
    dispatch(tweets());
    dispatch(getAllUsers());
  }, [dispatch]);

  // Render the Home component
  return (
    <div>
      {/* Render feed header */}
      <div className="feedHeader">
        <FeedHeader />
      </div>
      {/* Render NewTweet component */}
      <NewTweet />
      {/* Conditional rendering of tweets */}
      {tweet && tweet.length > 0 ? (
        tweet.map((tweets) => {
          return (
            // Render individual tweet component
            <Tweets
              key={tweets._id}
              tweetId={tweets._id}
              tweetImage={tweets.image}
              tweetCaption={tweets.content}
              userId={tweets.tweetedBy._id}
              tweetedBy={tweets.tweetedBy.name}
              username={tweets.tweetedBy.username}
              avatar={tweets.tweetedBy.avatar}
              likes={tweets.likes}
              comments={tweets.comments}
              retweetedBy={tweets.retweetedBy}
              date={tweets.createdAt}
            />
          );
        })
      ) : (
        <div className="text-center my-5">
          <h3 className="text-secondary">No Tweet Yet</h3>
        </div> // Render message if no tweets available
      )}
    </div>
  );
};

// Export the Home component
export default Home;
