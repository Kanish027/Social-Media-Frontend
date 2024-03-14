import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

// Define the LikedUsers component
const LikedUsers = ({ id, name, avatar, username }) => {
  return (
    <div className="d-flex justify-content-between my-3 align-items-center mx-3">
      <div className="d-flex gap-3 align-items-center">
        {/* Display user avatar */}
        <Avatar src={avatar} alt="" />
        <div>
          {/* Display user name */}
          <h6 className="mb-0">{name}</h6>
          {/* Display username */}
          <Link className="text-decoration-none text-secondary" to={`/profile/${id}`}>
            <small>@{username}</small>
          </Link>
        </div>
      </div>
      {/* Button to view user details */}
      <div>
        <Link
          to={`/profile/${id}`}
          className="btn btn-sm btn-primary px-3 rounded-5"
        >
          View
        </Link>
      </div>
    </div>
  );
};

// Export the LikedUsers component
export default LikedUsers;
