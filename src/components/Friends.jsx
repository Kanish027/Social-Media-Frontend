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
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Friends = () => {
  const { allUsers } = useSelector((state) => state.allUsers); // Get all users from Redux state

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" mt={2} mb={1}>
        Friends
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {allUsers && allUsers.length > 0 ? (
          allUsers.map((user) => (
            <div key={user._id}>
              <ListItem
                sx={{
                  justifyContent: "space-between",
                  "& .MuiButton-root": { marginLeft: "auto" },
                }}
              >
                <ListItemAvatar>
                  {user.avatar ? (
                    <Avatar alt={user.name} src={user.avatar.avatar_url} />
                  ) : (
                    <Avatar>{user.name && user.name.charAt(0)}</Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <React.Fragment>
                      <Link
                        to={`/profile/${user._id}`}
                        className="text-decoration-none  text-secondary"
                      >
                        @{user.username}
                      </Link>
                    </React.Fragment>
                  }
                />
                <Link
                  to={`/profile/${user._id}`}
                  className="btn btn-primary rounded-5 btn-sm px-3"
                >
                  View
                </Link>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))
        ) : (
          <div>No Peoples to follow</div>
        )}
      </List>
    </Box>
  );
};

export default Friends;
