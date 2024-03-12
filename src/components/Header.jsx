import { Box } from "@mui/material";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleNavClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <Box sx={{ display: { xs: "block", sm: "block", lg: "none" } }}>
      <div className="container-fluid ps-3 px-0 shadow-sm">
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary py-1 mb-3"
          >
            <Container fluid>
              <Link to={"/"} className="fw-bold fs-4 navbar-brand">
                Sales App
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
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Sales App
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="fw-semibold">
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

export default Header;
