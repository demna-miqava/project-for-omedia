import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SearchBar() {
  const [login, setLogin] = useState("");
  const lastSearch = JSON.parse(localStorage.getItem("lastSearch"))
    ? JSON.parse(localStorage.getItem("lastSearch"))
    : [];
  const addLastSearch = () => {
    if (lastSearch.length > 2) {
      lastSearch.pop();
      lastSearch.unshift(login);
      localStorage.setItem("lastSearch", JSON.stringify(lastSearch));
    } else {
      localStorage.setItem(
        "lastSearch",
        JSON.stringify([login, ...lastSearch])
      );
      console.log(lastSearch);
    }
  };
  return (
    <div>
      <form className="searchBox">
        <input
          className="searchInput"
          placeholder={lastSearch.join(",")}
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Link to={`/${login}`}>
          <button onClick={addLastSearch} className="searchButton">
            search
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
