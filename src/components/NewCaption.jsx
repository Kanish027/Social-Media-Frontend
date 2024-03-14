import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTweet } from "../Actions/UpdateTweet";
import { getMyTweets } from "../Actions/MyTweets";

// Component for updating tweet caption
const NewCaption = ({ tweetId, handleCloseUpdate }) => {
  // State for new caption
  const [newCaption, setNewCaption] = useState("");

  // Redux dispatch
  const dispatch = useDispatch();

  // Function to handle updating the tweet caption
  const handleUpdateCaption = async (e) => {
    e.preventDefault();
    // Dispatch action to update the tweet
    await dispatch(updateTweet(tweetId, newCaption));
    // Close the update modal
    await handleCloseUpdate();
    // Refresh user's tweets
    dispatch(getMyTweets());
  };

  return (
    <div className="container">
      {/* Form for updating the tweet caption */}
      <form onSubmit={handleUpdateCaption}>
        <div className="mb-3">
          {/* Textarea for entering new caption */}
          <textarea
            className="form-control"
            placeholder="Add new caption..."
            rows={4}
            onChange={(e) => setNewCaption(e.target.value)}
            value={newCaption}
          />
        </div>
        {/* Button to submit updated caption */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default NewCaption;
