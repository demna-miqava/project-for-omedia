import React, { useState, useEffect } from "react";
import "./App.css";
const UserRepos= ({ repos_url }) => {
  const [repos, setRepos] = useState([]);
  const getRepos = async () => {
    const response = await fetch(repos_url);
    const repo = await response.json();
    setRepos(repo.slice(0, 3));
    for (let i = repos.length - 1; i < 3; i++) {
      repos.push(undefined);
    }
  };
  useEffect(() => {
    getRepos();
  }, [repos_url]);

  return (
    <div>
      <h5>repositories:</h5>

      <div className="repos-info">
        <h5>{repos[0] === undefined ? "no repo" : repos[0].name}</h5>
        <h5>{repos[1] === undefined ? "no repo" : repos[1].name}</h5>
        <h5>{repos[2] === undefined ? "no repo" : repos[2].name}</h5>
      </div>
    </div>
  );
};

export default UserRepos;
