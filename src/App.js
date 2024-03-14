// Import necessary dependencies from Material-UI and React
import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import action for loading user
import { loadUser } from "./Actions/User";
// Import components for authentication, feed, navbar, sidebar, and rightbar
import Auth from "./components/Auth";
import Feed from "./components/Feed";
import Navbar2 from "./components/Navbar2";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  // Extract authentication status from Redux store
  const { isAuthenticated } = useSelector((state) => state.user);

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Load user data upon component mount
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // Render different components based on authentication status
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar2 />
            <Stack direction="row" spacing={0} justifyContent="space-between">
              <Sidebar />
              <Feed />
              <Rightbar />
            </Stack>
          </Box>
        </>
      ) : (
        // If user is not authenticated
        <>
          <Auth />
        </>
      )}
    </div>
  );
}

// Export the main application component
export default App;
