import axios from "axios";
import {
  deleteAccountFailure,
  deleteAccountRequest,
  deleteAccountSuccess,
} from "../features/deleteAccount/deleteAccount";

const deleteAccount = () => async (dispatch) => {
  try {
    dispatch(deleteAccountRequest());

    const { data } = await axios.delete("/api/v1/users/delete/account");

    console.log(data.message);

    dispatch(deleteAccountSuccess());
  } catch (error) {
    dispatch(deleteAccountFailure(error.response.data.message));
  }
};

export { deleteAccount };
