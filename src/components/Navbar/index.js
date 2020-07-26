import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("searched");
  };

  const openSearch = () => {
    setSearch(!search);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbarr">
      <nav className="navbarMenu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="searchBar">
        <form className="searchForm" onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            className="searchIcon"
            onClick={openSearch}
            src={require("../../assets/icons/searchicon.png")}
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
