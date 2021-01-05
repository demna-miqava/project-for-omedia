import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import { AiFillHome } from "react-icons/ai";
import UserRepos from "./UserRepos";
import OrganizationInfo from "./OrganizationInfo";
import Error from "./Error";
const url = "https://api.github.com/users/";

function User() {
  const [user, setUser] = useState({});
  const { login } = useParams();
  const getUsers = async () => {
    const response = await fetch(`${url}${login}`);
    const users = await response.json();
    setUser(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {user.message && user.message === "Not Found" ? (
        <Error />
      ) : (
        <div>
          <div>
            <Link to="/">
              <button className="btn">
                <AiFillHome />
              </button>
            </Link>
          </div>
          <div className="card">
            <img src={user.avatar_url} alt="" className="avatar" />
            <hr />
            <div className="info">
              <a href={user.html_url} target="blank">
                <h5>userName:{user.login}</h5>
              </a>
              <h4>type:{user.type}</h4>
              <UserRepos repos_url={user.repos_url} />
              <OrganizationInfo organizations_url={user.organizations_url} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
