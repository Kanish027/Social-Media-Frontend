import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
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

const Feed = () => {
  return (
    <Box flex={3} p={2} paddingTop={0} paddingRight={1} paddingLeft={1}>
      <div className="ms-3 feed">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/grok" element={<Grok />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/premium" element={<Premuim />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<More />} />
          <Route path="/followings" element={<Followings />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Box>
  );
};

export default Feed;
