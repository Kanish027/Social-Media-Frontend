import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import tweetReducer from "../features/tweets/tweetSlice";
import allUserReducer from "../features/Users/userSlice";
import likeUnlikeReducer from "../features/LikeAndUnlike/likeUnlikeSlice";
import followUnfollowReducer from "../features/followAndUnfollow/followUnfollowSlice";
import commentReducer from "../features/comments/commentSlice";
import myTweetsReducer from "../features/myTweets/myTweetsSlice";
import logoutReducer from "../features/logout/logoutSlice";
import updateProfileReducer from "../features/updateProfile/updateSlice";
import newTweetReducer from "../features/newTweet/newTweetSlice";
import updateTweetReducer from "../features/updateTweet/updateTweet";
import deleteTweetReducer from "../features/deleteTweets/deleteTweetSlice";
import updatePasswordReducer from "../features/updatePassword/updatePasswordSlice";
import deleteAccountReducer from "../features/deleteAccount/deleteAccount";
import forgotPasswordReducer from "../features/forgotPassword/forgotPasswordSlice";
import resetPasswordReducer from "../features/resetPassword/resetPasswordSlice";
import userProfileReducer from "../features/userProfile/useProfileSlice";
import getUserTweetsReducer from "../features/usersTweets/userTweetsSlice";
import retweetReducer from "../features/retweet/retweetSlice";

/**
 * Redux store configuration with reducers for managing application state.
 */
const store = configureStore({
  reducer: {
    user: userReducer,
    tweet: tweetReducer,
    allUsers: allUserReducer,
    tweetLikeStatus: likeUnlikeReducer,
    followStatus: followUnfollowReducer,
    comments: commentReducer,
    myTweets: myTweetsReducer,
    logout: logoutReducer,
    updateProfile: updateProfileReducer,
    newTweet: newTweetReducer,
    updateTweet: updateTweetReducer,
    deleteTweet: deleteTweetReducer,
    updatePassword: updatePasswordReducer,
    deleteAccount: deleteAccountReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userProfile: userProfileReducer,
    userTweets: getUserTweetsReducer,
    retweet: retweetReducer,
  },
});

export default store;
