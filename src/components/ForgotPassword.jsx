import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../Actions/ForgotPassword";
import { Link } from "react-router-dom";

// Define the ForgotPassword component
const ForgotPassword = () => {
  // Initialize state for email input
  const [email, setEmail] = useState("");

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Function to handle forgot password submission
  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  // Render the forgot password form
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-lg-7 border shadow-sm border-secondary-subtle bg-secondary-subtle px-5 pt-4 pb-4 rounded-4">
          <h3 className="text-center pb-2 fw-semibold logo-text">Twitter</h3>
          <form onSubmit={handleForgotPassword}>
            <div className="mb-3">
              {/* Input field for email */}
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="d-grid mb-3">
              {/* Button to send password reset token */}
              <button className="btn btn-dark btn-sm">Send Token</button>
            </div>
          </form>
          <div className="d-flex justify-content-end">
            {/* Link to return to login page */}
            <Link to={"/"} className="text-decoration-none text-dark">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the ForgotPassword component
export default ForgotPassword;
