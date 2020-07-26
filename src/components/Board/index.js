import React from "react";
import "./styles.css";
import Sidebar from "../Sidebar";
import PostList from "../PostList";

const Board = (props) => {
  return (
    <div className="container">
      <div className="posts">
        <PostList />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Board;
