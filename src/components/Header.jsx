import React, { useState } from "react";
import { Box } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

// Define the Header component
const Header = () => {
  // State to control the visibility of the offcanvas menu
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Function to handle navigation item click and close the offcanvas menu
  const handleNavClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <Box sx={{ display: { xs: "block", sm: "block", lg: "none" } }}>
      <div className="container-fluid ps-3 px-0 shadow-sm">
        {/* Render Navbar for small screen sizes */}
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary py-1 mb-3"
          >
            <Container fluid>
              {/* Brand link */}
              <Link to={"/"} className="fw-bold fs-4 navbar-brand">
                Sales App
              </Link>
              {/* Toggle button for offcanvas menu */}
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                onClick={() => setShowOffcanvas(!showOffcanvas)}
              />
              {/* Offcanvas menu */}
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={showOffcanvas}
                onHide={() => setShowOffcanvas(false)}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Sales App
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="fw-semibold">
                  {/* Navigation links */}
                  <Nav className="justify-content-end flex-grow-1 gap-1 pe-3">
                    <Link
                      to={"/"}
                      className="nav-link"
                      onClick={handleNavClick}
                    >
                      Add Sales
                    </Link>
                    <Link
                      to={"/topfivesales"}
                      className="nav-link"
                      onClick={handleNavClick}
                    >
                      Top 5 Sales
                    </Link>
                    <Link
                      to={"/revenue"}
                      className="nav-link"
                      onClick={handleNavClick}
                    >
                      Today's Total Revenue
                    </Link>
                    <Link
                      to={"/profile"}
                      className="nav-link"
                      onClick={handleNavClick}
                    >
                      Profile
                    </Link>
                    <Link
                      to={"/login"}
                      className="nav-link"
                      onClick={handleNavClick}
                    >
                      Login
                    </Link>
                    <Link
                      to={"/register"}
                      className="nav-link"
                      onClick={handleNavClick}
                    >
                      Register
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </Box>
  );
};

// Export the Header component
export default Header;
