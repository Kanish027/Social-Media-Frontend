import axios from "axios";
import {
  deleteAccountFailure,
  deleteAccountRequest,
  deleteAccountSuccess,
} from "../features/deleteAccount/deleteAccount";

/**
 * Action creator to delete user account.
 */
const deleteAccount = () => async (dispatch) => {
  try {
    // Dispatch action to indicate the start of account deletion process
    dispatch(deleteAccountRequest());

    // Make DELETE request to delete user account
    const { data } = await axios.delete("/api/v1/users/delete/account");

    // Dispatch action on successful account deletion
    dispatch(deleteAccountSuccess(data.message));
  } catch (error) {
    // Dispatch action on failure to delete account
    dispatch(deleteAccountFailure(error.response.data.message));
  }
};

export { deleteAccount };
