import React from "react";
import "./styles.css";
import Banner from "../../assets/banner/webbanner.gif";

const Logo = (props) => {
  return (
    <div>
      <img className="logo" src={Banner} alt="loading..." />
    </div>
  );
};

export default Logo;
