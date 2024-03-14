import axios from "axios";
import {
  GetAllUsersFailure,
  GetAllUsersRequest,
  GetAllUsersSuccess,
} from "../features/Users/userSlice";

/**
 * Async action creator to fetch all users with optional name filter.
 * Dispatches actions to indicate the start, success, or failure of the request.
 */
const getAllUsers =
  (name = "") =>
  async (dispatch) => {
    try {
      // Dispatch action to indicate the start of the request
      dispatch(GetAllUsersRequest());

      // Make GET request to fetch users with optional name filter
      const { data } = await axios.get(`/api/v1/users/users?name=${name}`);
      console.log(data);

      // Dispatch action with fetched users on success
      dispatch(GetAllUsersSuccess(data.users));
    } catch (error) {
      // Dispatch action with error message on failure
      dispatch(GetAllUsersFailure(error.response.data.message));
    }
  };

export { getAllUsers };
