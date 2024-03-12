import React from "react";
import { Avatar } from "@mui/material";

const LikedUsers = ({ name, avatar, username }) => {
  return (
    <div className="d-flex justify-content-between my-3 align-items-center mx-3">
      <div className="d-flex gap-3 align-items-center">
        <Avatar src={avatar} alt="" />
        <div>
          <h6 className="mb-0">{name}</h6>
          <small>@{username}</small>
        </div>
      </div>
      <div>
        <button className="btn btn-sm btn-primary px-3 rounded-5">View</button>
      </div>
    </div>
  );
};

export default LikedUsers;
