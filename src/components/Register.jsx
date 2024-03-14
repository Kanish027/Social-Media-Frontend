import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, register } from "../Actions/User";

// Component for user registration
const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");

  // Check authentication and loading status from Redux store
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle image change for profile picture
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

  // Handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();
    await dispatch(register(name, username, email, avatar, password));
    navigate("/");
    dispatch(loadUser());
  };

  // Redirect authenticated user to homepage
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className="row d-flex align-items-center sub-container px-1">
        <div className="col-lg-7 d-flex justify-content-center align-items-center">
          {/* Twitter logo */}
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQYfdhVRyjI-d3N2yBcm10S-1RiG4uuIqCSZELiN2gzaVAt6UvoX6qVLkiJ4L9aGs9Vc&usqp=CAU"
            width={"70%"}
            alt=""
          />
        </div>
        <div className="col-lg-5 px-0 card shadow-lg d-flex justify-content-center">
          <div className="p-5">
            {/* Twitter title */}
            <h3 className="fw-bold pb-3 text-center card-title logo-text">
              Twitter
            </h3>
            {/* Registration form */}
            <form onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-body-tertiary rounded-1 p-2"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              {/* Username */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-body-tertiary rounded-1 p-2"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              {/* Email */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-body-tertiary rounded-1 p-2"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              {/* Password */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control bg-body-tertiary rounded-1 p-2"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {/* Profile picture upload */}
              <div className="mb-3">
                <label htmlFor="fileInput" className="form-label">
                  Choose profile
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  onChange={handleImageChange}
                />
              </div>
              {/* Sign Up button */}
              <div className="d-grid">
                <button
                  disabled={isLoading}
                  className="btn btn-sm btn-dark p-2 fw-semibold"
                >
                  Sign Up
                </button>
              </div>
              {/* OR separator */}
              <div className="m-2 d-flex align-items-center justify-content-center ">
                <hr className="w-50" />
                <p className="mb-0 px-2 fw-semibold">OR</p>
                <hr className="w-50" />
              </div>
              {/* Login link */}
              <div className="text-center border rounded-1 bg-body-tertiary py-2">
                <span className="text-dark-subtle">
                  Already have an account?
                </span>{" "}
                <Link
                  to={"/"}
                  className="text-decoration-none fw-semibold text-dark"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
