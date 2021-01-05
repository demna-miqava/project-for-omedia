import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import UserInfo from "./UserRepos";
const url = "https://api.github.com/search/users?q=followers%3A%3E%3D1000";

function Home() {
  const [gridview, setGridview] = useState(true);
  const [users, setUsers] = useState([]);
  const handleChange = () => {
    setGridview(!gridview);
  };
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.items);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <button onClick={handleChange} className="btn">
        {gridview ? <BsFillGrid3X3GapFill /> : <AiOutlineUnorderedList />}
      </button>
      <div className={`${gridview ? "grid-container" : "row"}`}>
        {users.map((user) => {
          const {
            id,
            avatar_url,
            login,
            type,
            repos_url,
            organizations_url,
          } = user;
          return (
            <div className={`${gridview ? "grid-item" : "list-item"}`} key={id}>
              <img
                src={avatar_url}
                className={`${gridview ? "avatar" : "avatar list-avatar"}`}
              />
              <div className={`${gridview ? "info" : "info list-info"}`}>
                <h5>
                  <Link to={`/${login}`}>user:{login}</Link>
                </h5>
                <h5>type:{type}</h5>
                <UserInfo repos_url={repos_url} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
