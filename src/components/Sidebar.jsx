import {
  BookmarkBorderOutlined,
  BookmarkOutlined,
  CheckBox,
  CheckBoxOutlineBlank,
  Email,
  EmailOutlined,
  FeaturedPlayList,
  FeaturedPlayListOutlined,
  Home,
  HomeOutlined,
  Notifications,
  NotificationsNoneOutlined,
  Pending,
  PendingOutlined,
  PeopleAlt,
  PeopleAltOutlined,
  Person,
  PersonOutlineOutlined,
  Search,
  SearchOff,
  Twitter,
} from "@mui/icons-material";
import { Avatar, Box, List } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../Actions/Logout";
import { loadUser } from "../Actions/User";

// Sidebar component containing navigation links and user profile information
const Sidebar = () => {
  // State to track the active tab
  const [tab, setTab] = useState(window.location.pathname);

  // Redux selector to get user information
  const { user } = useSelector((state) => state.user);

  // Redux dispatch function
  const dispatch = useDispatch();
  // Navigation function for redirecting
  const navigate = useNavigate();

  // Function to handle user logout
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
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      paddingLeft={2}
    >
      {/* Sidebar content */}
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "100vh",
          position: "fixed",
          top: 0,
          paddingTop: "15px",
          paddingRight: "21px",
          scrollbarWidth: "thick",
          scrollbarColor: "transparent transparent",
        }}
      >
        {/* Twitter logo link */}
        <Link to={"/"} className="logo text-dark">
          <i className="fa-brands fa-x-twitter fs-2 ms-2"></i>
        </Link>
        <Box>
          <List className="">
            {/* Navigation links */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/"}
              onClick={() => setTab("/")}
            >
              {/* Home */}
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/" ? (
                    <Home className="fs-3" />
                  ) : (
                    <HomeOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Home</div>
              </div>
            </Link>
            {/* Explore */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/explore"}
              onClick={() => setTab("/explore")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/explore" ? (
                    <Search className="fs-3" />
                  ) : (
                    <SearchOff className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Explore</div>
              </div>
            </Link>
            {/* Notifications */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/notifications"}
              onClick={() => setTab("/notifications")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/notifications" ? (
                    <Notifications className="fs-3" />
                  ) : (
                    <NotificationsNoneOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Notifications</div>
              </div>
            </Link>
            {/* Messages */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/messages"}
              onClick={() => setTab("/messages")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/messages" ? (
                    <Email className="fs-3" />
                  ) : (
                    <EmailOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Messages</div>
              </div>
            </Link>
            {/* Grok */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/grok"}
              onClick={() => setTab("/grok")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/grok" ? (
                    <CheckBox className="fs-3" />
                  ) : (
                    <CheckBoxOutlineBlank className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Grok</div>
              </div>
            </Link>
            {/* Lists */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/lists"}
              onClick={() => setTab("/lists")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/lists" ? (
                    <FeaturedPlayList className="fs-3" />
                  ) : (
                    <FeaturedPlayListOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Lists</div>
              </div>
            </Link>
            {/* Bookmarks */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/bookmarks"}
              onClick={() => setTab("/bookmarks")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/bookmarks" ? (
                    <BookmarkOutlined className="fs-3" />
                  ) : (
                    <BookmarkBorderOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Bookmarks</div>
              </div>
            </Link>
            {/* Communities */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/communities"}
              onClick={() => setTab("/communities")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/communities" ? (
                    <PeopleAlt className="fs-3" />
                  ) : (
                    <PeopleAltOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Communities</div>
              </div>
            </Link>
            {/* Premium */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/premium"}
              onClick={() => setTab("/premium")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/premium" ? (
                    <Twitter className="fs-3 text-primary" />
                  ) : (
                    <Twitter className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Premium</div>
              </div>
            </Link>
            {/* Profile */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/profile"}
              onClick={() => setTab("/profile")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/profile" ? (
                    <Person className="fs-3" />
                  ) : (
                    <PersonOutlineOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">Profile</div>
              </div>
            </Link>
            {/* More */}
            <Link
              className="text-decoration-none d-flex sidebar-link mb-1"
              to={"/more"}
              onClick={() => setTab("/more")}
            >
              <div className="d-inline-flex links text-dark align-items-center p-2 pe-4 gap-4">
                <div>
                  {tab === "/more" ? (
                    <Pending className="fs-3" />
                  ) : (
                    <PendingOutlined className="fs-3" />
                  )}
                </div>
                <div className="fs-5">More</div>
              </div>
            </Link>
            {/* Post button */}
            <div className="text-center border align-items-center py-3 rounded-5 bg-primary">
              <span className="fw-bold text-white">Post</span>
            </div>
            {/* User profile information */}
            <div className="d-flex justify-content-between align-items-center mt-4 gap-4">
              <div className="d-flex align-items-center gap-2">
                <Avatar
                  src={user && user.avatar && user.avatar.avatar_url}
                ></Avatar>
                <div className="profile-info d-flex flex-column my-0">
                  <h6 className="my-0 profile-name">{user && user.name}</h6>
                  <Link to={"/profile"} className="text-decoration-none">
                    <small className="text-secondary">
                      @{user && user.username}
                    </small>
                  </Link>
                </div>
              </div>
              {/* Dropdown for logout */}
              <div className="">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <i className="fa-solid fa-ellipsis"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <button className="btn btn-sm" onClick={handleLogout}>
                      Log out @{user && user.username}
                    </button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
