import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
import Auth from "./components/Auth";
import Feed from "./components/Feed";
import Navbar2 from "./components/Navbar2";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

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
        <>
          <Auth />
        </>
      )}
    </div>
  );
}

export default App;
