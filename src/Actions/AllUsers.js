import axios from "axios";
import {
  GetAllUsersFailure,
  GetAllUsersRequest,
  GetAllUsersSuccess,
} from "../features/Users/userSlice";

const getAllUsers =
  (name = "") =>
  async (dispatch) => {
    try {
      dispatch(GetAllUsersRequest());
      const { data } = await axios.get(`/api/v1/users/users?name=${name}`);
      console.log(data);
      dispatch(GetAllUsersSuccess(data.users));
    } catch (error) {
      dispatch(GetAllUsersFailure(error.response.data.message));
    }
  };

export { getAllUsers };
