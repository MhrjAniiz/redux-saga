import * as type from "../types";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.users,
        error: "",
      };

    case type.GET_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.message,
      };
    default:
      return state;
  }
};

export default userReducer;
