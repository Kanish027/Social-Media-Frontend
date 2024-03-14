import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../Actions/UpdateProfile";
import { loadUser } from "../Actions/User";
import { getMyTweets } from "../Actions/MyTweets";
import { Avatar } from "@mui/material";
import Swal from "sweetalert2";

// Define the EditProfile component
const EditProfile = ({ handleCloseEdit }) => {
  // Extract user data and loading status from Redux store
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.updateProfile);

  // Initialize state variables for form fields
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.location);
  const [date, setDate] = useState(user.dob ? new Date(user.dob) : null);
  const [avatar, setAvatar] = useState(
    user.avatar ? user.avatar.avatar_url : null
  );

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
  };

  // Function to handle image removal
  const handleRemoveImage = () => {
    setAvatar(null);
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Function to handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(email, name, address, date, avatar));
    await handleCloseEdit();
    await dispatch(loadUser());
    await dispatch(getMyTweets());
    Swal.fire({
      title: "Profile Updated",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  // Render the edit profile form
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
                  onClickCapture={handleRemoveImage}
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

// Export the EditProfile component
export default EditProfile;
