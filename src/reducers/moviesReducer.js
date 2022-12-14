import { GET_MOVIES } from "../actions/types";

export default function moviesReducer (state = '', action) {
    switch (action.type) {
      case GET_MOVIES:
        return action.payload.data;
      default:
        return state;
    }
  };