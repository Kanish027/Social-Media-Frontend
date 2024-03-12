import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Actions/AllUsers";
import { tweets } from "../Actions/Tweets";
import FeedHeader from "./FeedHeader";
import Tweets from "./Tweets";
import NewTweet from "./NewTweet";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, tweet, error } = useSelector((state) => state.tweet);

  useEffect(() => {
    dispatch(tweets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="feedHeader">
        <FeedHeader />
      </div>
      <NewTweet />
      {tweet && tweet.length > 0 ? (
        tweet.map((tweets) => {
          return (
            <Tweets
              key={tweets._id}
              tweetId={tweets._id}
              tweetImage={tweets.image}
              tweetCaption={tweets.content}
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
        <div>No Tweet Yet</div>
      )}
    </div>
  );
};

export default Home;
