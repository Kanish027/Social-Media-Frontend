import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../Actions/ResetPassword";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();

  const params = useParams();

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-lg-7 border bg-secondary-subtle px-5 pb-4 pt-5 rounded-4 border-secondary-subtle shadow-sm">
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>
            <div className="d-grid mb-3">
              <button className="btn btn-dark btn-sm">Reset</button>
            </div>
          </form>
          <div className="d-flex justify-content-end">
            <Link to={"/"} className="text-decoration-none text-dark">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
