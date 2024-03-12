import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTweet } from "../Actions/User";

const NewTweet = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.newTweet);

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const handleRemoveimage = () => {
    setImage(null);
  };

  const handleNewTweet = async (e) => {
    e.preventDefault();
    await dispatch(newTweet(caption, image));
    setCaption("");
    setImage(null);
  };

  return (
    <div className="container p-3 border">
      <form onSubmit={handleNewTweet}>
        <div className="d-flex align-items-start gap-2">
          <Avatar
            src={user && user.avatar ? user.avatar.avatar_url : null}
          ></Avatar>
          <div className="w-100">
            <textarea
              className="form-control fs-5 border-0 mb-2"
              placeholder="What is happening?"
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            ></textarea>
            {image && (
              <div className="position-relative mb-2">
                <img src={image} alt="Uploaded" className="card-img-top mb-2" />
                <button
                  onClick={handleRemoveimage}
                  className="btn-sm btn rounded text-light fs-4 rounded-5 position-absolute top-0 end-0"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            )}
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <label
                  htmlFor="file-upload"
                  className="custom-file-upload"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-regular fa-image text-primary"></i>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
              <div>
                <button
                  disabled={isLoading}
                  className="btn btn-primary btn-sm px-3 rounded-5"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTweet;
