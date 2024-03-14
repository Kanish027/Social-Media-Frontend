import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// Define the Followers component
const Followers = ({ id, avatar, name, username, handleCloseFollowers }) => {
  return (
    <div className="d-flex justify-content-between my-3 align-items-center mx-3">
      <div className="d-flex gap-3 align-items-center">
        {/* Display user avatar */}
        <Avatar src={avatar ? avatar.avatar_url : null} alt="" />
        <div>
          {/* Display user name */}
          <h6 className="mb-0">{name}</h6>
          {/* Display username */}
          <small>@{username}</small>
        </div>
      </div>
      {/* Button to view follower details */}
      <div>
        <Link
          to={`/profile/${id}`}
          onClick={() => handleCloseFollowers()}
          className="btn btn-sm btn-primary px-3 rounded-5"
        >
          View
        </Link>
      </div>
    </div>
  );
};

// Export the Followers component
export default Followers;
