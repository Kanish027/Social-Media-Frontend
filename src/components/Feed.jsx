import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import components for different sections of the feed
import Bookmark from "./Bookmark";
import Communities from "./Communities";
import Explore from "./Explore";
import Followings from "./Followings";
import Grok from "./Grok";
import Home from "./Home";
import Lists from "./Lists";
import Messages from "./Messages";
import More from "./More";
import Notifications from "./Notifications";
import Premuim from "./Premuim";
import Profile from "./Profile";
import UserProfile from "./UserProfile";
import Friends from "./Friends";

// Define the Feed component
const Feed = () => {
  return (
    <Box flex={3} p={2} paddingTop={0} paddingRight={1} paddingLeft={1}>
      <div className="ms-3 feed">
        {/* Define routes for different sections of the feed */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for home */}
          <Route path="/explore" element={<Explore />} />{" "}
          {/* Route for explore */}
          <Route path="/notifications" element={<Notifications />} />{" "}
          {/* Route for notifications */}
          <Route path="/messages" element={<Messages />} />{" "}
          {/* Route for messages */}
          <Route path="/grok" element={<Grok />} /> {/* Route for grok */}
          <Route path="/lists" element={<Lists />} /> {/* Route for lists */}
          <Route path="/bookmarks" element={<Bookmark />} />{" "}
          {/* Route for bookmarks */}
          <Route path="/communities" element={<Communities />} />{" "}
          {/* Route for communities */}
          <Route path="/premium" element={<Premuim />} />{" "}
          {/* Route for premium */}
          <Route path="/profile" element={<Profile />} />{" "}
          {/* Route for profile */}
          <Route path="/more" element={<More />} /> {/* Route for more */}
          <Route path="/followings" element={<Followings />} />{" "}
          {/* Route for followings */}
          <Route path="/profile/:id" element={<UserProfile />} />{" "}
          {/* Route for user profiles */}
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </Box>
  );
};

// Export the Feed component
export default Feed;
