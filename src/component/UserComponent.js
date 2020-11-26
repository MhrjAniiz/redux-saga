import React from "react";
import Card from "./CardComponent";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../redux/actions/users";

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers(users));
  }, []);
  return (
    <>
      {loading && <p> loading ......</p>}
      {users.length > 0 &&
        users.map((user) => {
          return <Card name={user.name} company={user.company} key={user.id} />;
        })}
      {users.length === 0 && <p>no users available</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};

export default UserComponent;
