import React from "react";
import "./styles.css";
import Logo from "../Logo";
import Navbar from "../Navbar";

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
