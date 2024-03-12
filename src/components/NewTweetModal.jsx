import { Avatar } from "@mui/material";
import React from "react";

const NewTweetModal = ({ handleClose }) => {
  return (
    <div className="p-2">
      <div>
        <button onClick={handleClose} className="btn">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="mt-2 mx-1">
        <form>
          <div className="d-flex gap-2">
            <div>
              <Avatar src=""></Avatar>
            </div>
            <div className="w-100">
              <textarea
                className="form-control fs-5 border-0"
                rows={4}
                placeholder="What is happening?!"
              />
            </div>
          </div>
          <div>
            <hr className="my-2 text-secondary" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>Media</div>
            <div>
              <button className="btn btn-sm btn-primary">Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTweetModal;
