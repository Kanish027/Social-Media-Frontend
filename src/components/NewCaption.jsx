import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTweet } from "../Actions/UpdateTweet";
import { getMyTweets } from "../Actions/MyTweets";

const NewCaption = ({ tweetId, handleCloseUpdate }) => {
  const [newCaption, setNewCaption] = useState("");

  const dispatch = useDispatch();

  const handleUpdateCaption = async (e) => {
    e.preventDefault();
    await dispatch(updateTweet(tweetId, newCaption));
    await handleCloseUpdate();
    dispatch(getMyTweets());
  };

  return (
    <div className="container">
      <form onSubmit={handleUpdateCaption}>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Add new caption..."
            rows={4}
            onChange={(e) => setNewCaption(e.target.value)}
            value={newCaption}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default NewCaption;
