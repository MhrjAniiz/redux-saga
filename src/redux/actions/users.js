import * as type from "../types";

const getUsers = () => {
  return {
    type: type.GET_USERS_REQUESTED,
  };
};

export default getUsers;
