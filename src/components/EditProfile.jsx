import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../Actions/UpdateProfile";
import { loadUser } from "../Actions/User";
import { getMyTweets } from "../Actions/MyTweets";
import { Avatar } from "@mui/material";
import Swal from "sweetalert2";

const EditProfile = ({ handleCloseEdit }) => {
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.updateProfile);

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.location);
  const [date, setDate] = useState(user.dob ? new Date(user.dob) : null);
  const [avatar, setAvatar] = useState(
    user.avatar ? user.avatar.avatar_url : null
  );

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const handleRemoveimage = () => {
    setAvatar(null);
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(email, name, address, date, avatar));
    await handleCloseEdit();
    await dispatch(loadUser());
    await dispatch(getMyTweets());
    Swal.fire({
      title: "Profile Updated",
      // text: "Have a great day!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container">
      <div className="row mt-4 mb-3 mx-3 d-flex justify-content-center">
        <div className="col">
          <h3 className="fw-bold text-center my-1">Update Profile</h3>
          <form className="mt-3" onSubmit={handleUpdate}>
            <div className="mb-3 d-flex justify-content-center">
              <Avatar sx={{ width: 70, height: 70 }} src={avatar}></Avatar>
              {avatar && (
                <button
                  onClickCapture={handleRemoveimage}
                  className="btn btn-sm"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                rows={3}
                type="text"
                className="form-control"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <div>
                <DatePicker
                  className="form-control"
                  dateFormat="MMMM d, yyyy"
                  isClearable
                  onChange={(newDate) => setDate(newDate)}
                  selected={date}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="fileInput" className="form-label">
                Change Profile Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="fileInput"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-3 d-grid">
              <button disabled={isLoading} className="btn btn-primary">
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
