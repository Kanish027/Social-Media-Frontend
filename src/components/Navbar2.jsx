import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const { user } = useSelector((state) => state.user);

  const handleNavClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <div className="container-fluid d-md-none ps-3 px-0 shadow-sm">
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary py-1 mb-3"
        >
          <Container fluid>
            <Link to={"/"} className="fw-bold fs-4 navbar-brand">
              <i className="fa-brands fa-x-twitter fs-2 ms-2"></i>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header
                closeButton
                style={{ paddingTop: "1rem", paddingBottom: "0.5rem" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Avatar src={user && user.avatar && user.avatar.avatar_url}></Avatar>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <div className="ms-3">
                <h6 className="mb-0">{user && user.name}</h6>
                <small className="text-secondary">@{user && user.username}</small>
              </div>
              <div className="d-flex ms-3 gap-4 mt-2">
                <div>
                  <span className="fw-bold">{user && user.followings.length}</span>{" "}
                  <small className="text-secondary">Following</small>
                </div>
                <div>
                  <span className="fw-bold">{user && user.followers.length}</span>{" "}
                  <small className="text-secondary">Followers</small>
                </div>
              </div>
              <Offcanvas.Body className="fw-semibold">
                <Nav className="justify-content-end flex-grow-1 gap-1 pe-3">
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
                    to={"/premium"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-brands fa-x-twitter fs-5"></i>
                      </div>
                      <div className="fs-5">Premium</div>
                    </div>
                  </Link>
                  <Link
                    className="text-decoration-none d-flex sidebar-link my-2"
                    to={"/lists"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-solid fa-list fs-5"></i>
                      </div>
                      <div className="fs-5">Lists</div>
                    </div>
                  </Link>
                  <Link
                    className="text-decoration-none d-flex sidebar-link my-2"
                    to={"/bookmarks"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-regular fa-bookmark fs-5"></i>
                      </div>
                      <div className="fs-5">Bookmarks</div>
                    </div>
                  </Link>
                  <Link
                    className="text-decoration-none d-flex sidebar-link my-2"
                    to={"/communities"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-solid fa-user-group fs-5"></i>
                      </div>
                      <div className="fs-5">Communities</div>
                    </div>
                  </Link>
                  <Link
                    className="text-decoration-none d-flex sidebar-link my-2"
                    to={"/communities"}
                    onClick={handleNavClick}
                  >
                    <div className="d-inline-flex links text-dark align-items-center p-1 gap-4">
                      <div>
                        <i className="fa-solid fa-user-group fs-5"></i>
                      </div>
                      <div className="fs-5">Monetization</div>
                    </div>
                  </Link>
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
