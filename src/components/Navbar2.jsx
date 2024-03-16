import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { logout } from "../Actions/Logout";
import Swal from "sweetalert2";
import { loadUser } from "../Actions/User";

// Navbar2 component for mobile view
const Navbar2 = () => {
  // State for controlling offcanvas visibility
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Get user information from Redux store
  const { user } = useSelector((state) => state.user);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Navigation function for redirecting
  const navigate = useNavigate();

  // Function to handle offcanvas close
  const handleNavClick = () => {
    setShowOffcanvas(false);
  };

  const handleLogout = async () => {
    await dispatch(logout());
    Swal.fire({
      title: "Logout Successfully",
      text: "Have a great day!",
      icon: "success",
      confirmButtonText: "OK",
    });
    dispatch(loadUser());
    navigate("/");
  };

  return (
    <div className="container-fluid d-md-none ps-3 px-0 shadow-sm">
      {/* Loop over responsive breakpoints */}
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary py-1 mb-3"
        >
          <Container fluid>
            {/* Render logo with link */}
            <Link to={"/"} className="fw-bold fs-4 navbar-brand">
              <i className="fa-brands fa-x-twitter fs-2 ms-2"></i>
            </Link>
            {/* Render navbar toggle button */}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            {/* Render offcanvas menu */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* Render user avatar */}
                  <Avatar
                    src={user && user.avatar && user.avatar.avatar_url}
                  ></Avatar>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <div className="ms-3">
                {/* Render user name and username */}
                <h6 className="mb-0">{user && user.name}</h6>
                <small className="text-secondary">
                  @{user && user.username}
                </small>
              </div>
              <div className="d-flex ms-3 gap-4 mt-2">
                <div>
                  {/* Render number of followings */}
                  <span className="fw-bold">
                    {user && user.followings.length}
                  </span>{" "}
                  <small className="text-secondary">Following</small>
                </div>
                <div>
                  {/* Render number of followers */}
                  <span className="fw-bold">
                    {user && user.followers.length}
                  </span>{" "}
                  <small className="text-secondary">Followers</small>
                </div>
              </div>
              <Offcanvas.Body className="fw-semibold">
                <Nav className="justify-content-end flex-grow-1 gap-1 pe-3">
                  {/* Render links for various pages */}
                  <Link
                    className="text-decoration-none d-flex sidebar-link my-2"
                    to={"/profile"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-regular fa-user fs-5"></i>
                      </div>
                      <div className="fs-5">Profile</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none d-flex sidebar-link my-2"
                    to={"/friends"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-solid fa-user-group"></i>
                      </div>
                      <div className="fs-5">Find Friends</div>
                    </div>
                  </Link>
                  <button onClick={handleLogout} className="my-2 btn btn-dark">
                    Logout
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Navbar2;
