import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../Actions/DeleteAccount";
import { updatePassword } from "../Actions/UpdatePassword";
import { loadUser } from "../Actions/User";

// Component for user settings
const Settings = ({ handleCloseSettings }) => {
  // State variables for old and new passwords
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Redux state for loading status when deleting account
  const { isLoading } = useSelector((state) => state.deleteAccount);

  // Redux dispatch function
  const dispatch = useDispatch();
  // Navigation function for redirecting after deleting account
  const navigate = useNavigate();

  // Function to handle password update
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    // Dispatch action to update password
    await dispatch(updatePassword(oldPassword, newPassword));
    // Close settings modal
    handleCloseSettings();
    console.log("Password Updated");
  };

  // Function to handle account deletion
  const handleDeleteAccount = async () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    // If user confirms deletion
    if (isConfirmed) {
      // Dispatch action to delete account
      await dispatch(deleteAccount());
      console.log("Account Deleted");
      // Reload user data
      dispatch(loadUser());
      // Redirect to home page
      navigate("/");
    } else {
      console.log("Account deletion cancelled");
    }
  };

  return (
    <div className="container">
      {/* Form for updating password */}
      <form onSubmit={handleUpdatePassword}>
        <div className="mb-3">
          <label htmlFor="old-password" className="form-label">
            Old Password
          </label>
          <input
            type="password"
            className="form-control"
            id="old-password"
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            className="form-control"
            id="new-password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 d-grid">
          <button className="btn btn-primary btn-sm">Update</button>
        </div>
      </form>
      {/* Divider for visual separation */}
      <div className="m-2 d-flex align-items-center justify-content-center ">
        <hr className="w-50" />
        <p className="mb-0 px-2 fw-semibold">OR</p>
        <hr className="w-50" />
      </div>
      {/* Button for deleting account */}
      <div className="d-grid">
        <button
          className="btn btn-sm btn-outline-danger border border-danger"
          onClick={() => handleDeleteAccount()}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete Account"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
