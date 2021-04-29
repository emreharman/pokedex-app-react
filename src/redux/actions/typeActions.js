import axios from "axios";
import {
  TYPES_FETCH_STARTED,
  TYPES_FETCH_SUCCESS,
  TYPES_FETCH_FAIL,
} from "../actions/actionTypes";
const typesURL = "http://localhost:8000/types";

export const getTypes = (dispatch) => {
  dispatch({ type: TYPES_FETCH_STARTED });
  axios
    .get(typesURL)
    .then((res) => {
      dispatch({ type: TYPES_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: TYPES_FETCH_FAIL, payload: err }));
};
