import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Actions/User";

// Define the Login component
const Login = () => {
  // Define state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Retrieve authentication state and loading state from Redux store
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };

  // Redirect to home page if user is already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Render login form
  return (
    <div className="container">
      <div className="row d-flex align-items-center sub-container px-1">
        <div className="col-lg-7 d-flex justify-content-center align-items-center">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQYfdhVRyjI-d3N2yBcm10S-1RiG4uuIqCSZELiN2gzaVAt6UvoX6qVLkiJ4L9aGs9Vc&usqp=CAU"
            width={"70%"}
            alt=""
          />
        </div>
        <div className="col-lg-5 px-0 card shadow-lg d-flex justify-content-center">
          <div className="p-5 ">
            <h3 className="fw-bold pb-3 text-center card-title logo-text">
              Twitter
            </h3>
            <form onSubmit={handleLogin}>
              {/* Input field for email */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-body-tertiary rounded-1 p-2"
                  placeholder="Phone number, username, or email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              {/* Input field for password */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control bg-body-tertiary rounded-1 p-2"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {/* Login button */}
              <div className="d-grid mb-2">
                <button
                  disabled={isLoading}
                  className="btn btn-sm btn-dark p-2 fw-semibold"
                >
                  Login
                </button>
              </div>
              {/* Forgot password link */}
              <div>
                <Link
                  to={"/forgot/password"}
                  className="text-decoration-none text-dark d-flex justify-content-end"
                >
                  Forgot Password?
                </Link>
              </div>
              {/* Separator */}
              <div className="m-2 d-flex align-items-center justify-content-center ">
                <hr className="w-50" />
                <p className="mb-0 px-2">OR</p>
                <hr className="w-50" />
              </div>
              {/* Sign up link */}
              <div className="text-center border rounded-1 bg-body-tertiary py-2">
                <span className="text-dark-subtle">Don't have an account?</span>{" "}
                <Link
                  to={"/register"}
                  className="text-decoration-none fw-semibold text-dark"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Login component
export default Login;
