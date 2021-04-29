import {
  TYPES_FETCH_STARTED,
  TYPES_FETCH_SUCCESS,
  TYPES_FETCH_FAIL,
} from "../actions/actionTypes";

const initialState = {
  types: [],
  fetching: false,
  fetched: false,
  error: null,
};

export const typesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES_FETCH_STARTED:
      return {
        ...state,
        fetching: true,
      };
    case TYPES_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        types: action.payload,
      };
    case TYPES_FETCH_FAIL:
      return {
        fetching: false,
        fetched: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
