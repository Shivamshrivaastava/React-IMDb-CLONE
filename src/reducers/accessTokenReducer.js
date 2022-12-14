import { ACCESS_TOKEN, LOGGED_OUT } from "../actions/types";

export default function accessTokenReducer ( state = '', action ) {
    switch (action.type) {
      case ACCESS_TOKEN:
        return action.payload.data.getAccessToken;
      case LOGGED_OUT:
        return null;
      default:
        return state;
    }
  };