import React from "react";

// Import FeedHeader component for navigation
import FeedHeader from "./FeedHeader";

// Define the Followings component
const Followings = () => {
  return (
    <div>
      {/* Render FeedHeader for navigation */}
      <FeedHeader />
      {/* Render content for Followings page */}
      <p>Followings</p>
    </div>
  );
};

// Export the Followings component
export default Followings;
