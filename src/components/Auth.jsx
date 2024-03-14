import React from "react";
import { Route, Routes } from "react-router-dom";

// Import components for login, registration, forgot password, and reset password
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

// Define the authentication component
const Auth = () => {
  return (
    <div>
      {/* Define routes for different authentication-related pages */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route for login page */}
        <Route path="/register" element={<Register />} />{" "}
        {/* Route for registration page */}
        <Route path="/forgot/password" element={<ForgotPassword />} />{" "}
        {/* Route for forgot password page */}
        <Route path="/reset/password/:token" element={<ResetPassword />} />{" "}
        {/* Route for reset password page with token */}
      </Routes>
      {/* Uncomment below if you want to render the Login component directly */}
      {/* <Login /> */}
    </div>
  );
};

// Export the authentication component
export default Auth;
