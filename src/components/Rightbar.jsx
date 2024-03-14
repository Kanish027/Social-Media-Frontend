import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import { getAllUsers } from "../Actions/AllUsers";

// Component for the right sidebar
const Rightbar = () => {
  const { allUsers } = useSelector((state) => state.allUsers); // Get all users from Redux state
  const [name, setName] = useState(""); // State for filtering users by name

  const dispatch = useDispatch(); // Redux dispatch function

  // Effect to fetch all users when component mounts or name state changes
  useEffect(() => {
    dispatch(getAllUsers(name));
  }, [dispatch, name]);

  return (
    <Box
      flex={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box
        paddingLeft={1}
        sx={{
          overflowY: "auto",
          maxHeight: "100vh",
          position: "fixed",
          top: 0,
          paddingTop: "10px",
          paddingRight: "10px",
          scrollbarWidth: "thin", // Set the scrollbar width for Firefox and other browsers
          scrollbarColor: "transparent transparent", // Set the scrollbar color for Firefox and other browsers
          "&::-webkit-scrollbar": {
            width: "0", // Set the width of the scrollbar for WebKit browsers (Chrome, Safari)
          },
        }}
        className="scroll-container" // Add a class for styling
      >
        {/* Search input for filtering users */}
        <input
          type="search"
          className="form-control text-center bg-body-tertiary rounded-5"
          placeholder="Search"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {/* Title for the section */}
        <Typography mt={2}>Connect Easily</Typography>

        {/* List of users */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {/* Map through all users and render list items */}
          {allUsers && allUsers.length > 0 ? (
            allUsers.map((user) => {
              return (
                <div key={user._id}>
                  <ListItem
                    sx={{
                      justifyContent: "space-between",
                      "& .MuiButton-root": { marginLeft: "auto" }, // Align the button to the end
                    }}
                  >
                    {/* User Avatar */}
                    <ListItemAvatar>
                      {user.avatar ? (
                        <Avatar alt="Remy Sharp" src={user.avatar.avatar_url} />
                      ) : (
                        <Avatar></Avatar>
                      )}
                    </ListItemAvatar>
                    {/* User details */}
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <React.Fragment>
                          {/* User username with link to profile */}
                          <Link
                            to={`/profile/${user && user._id}`} // Ensure correct URL for the profile page
                            className="text-decoration-none"
                          >
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              @{user.username}
                            </Typography>
                          </Link>
                        </React.Fragment>
                      }
                    />
                    {/* Button to view user profile */}
                    <Link
                      to={`/profile/${user && user._id}`} // Ensure correct URL for the profile page
                      className="btn btn-primary rounded-5 btn-sm px-3"
                    >
                      View
                    </Link>
                  </ListItem>
                  {/* Divider between list items */}
                  <Divider variant="inset" component="li" />
                </div>
              );
            })
          ) : (
            <div>No Peoples to follow</div>
          )}
          {/* Placeholder list item */}
          <ListItem>
            <ListItemText
              secondary={
                <React.Fragment>
                  {
                    " — I'll be in your neighborhood doing errands this.............................."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
