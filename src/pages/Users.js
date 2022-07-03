import React from "react";
import { usersApi } from "../Service/apiService";
import { Link } from "react-router-dom";
import "../assets/styles/users.scss";

const Users = () => {
  const { data, error, isLoading } = usersApi.useGetUsersQuery();



  const userDetailsHandler = (id) => {
    userDetailsHandler(id);
  };

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong. Try again, please</h3>}
      <div className="users">
        {data &&
          data.map((user) => (
            <div key={user.id} className="user">
              <p className="user__name">name: {user.userName} </p>
              <div className="user__post">
                <p className="title">Email: {user.email} </p>{" "}
              </div>
              <Link to={`users/${user.id}`}>
                <button>Details</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Users;
