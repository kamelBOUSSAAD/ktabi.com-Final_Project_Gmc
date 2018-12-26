import axios from "axios";

import {
  GET_RECENT_USERS,
 
} from "./types";

// Create book
export const getRecentUsers = () => dispatch => {
    axios
    .get(`/api/users/top`)
    .then(res =>
      dispatch({
        type: GET_RECENT_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RECENT_USERS,
        payload: null
      })
    );
};
