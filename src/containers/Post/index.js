import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "../../components/UI/Card";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

import data from "../../data/posts.json";

const Post = (props) => {
  const [post, setPost] = useState({
    id: "",
    postCategory: "",
    postTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    postImage: "",
    postText: "",
  });

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = data.data.find((post) => post.id == postId);
    window.scrollTo(0, 0);
    setPost(post);
  }, post.data);

  if (post.postImage == "") return null;

  return (
    <div className="container">
      <div className="posts">
        <Card>
          <div className="titulo">{post.postTitle}</div>
          <div className="fecha">{post.postedOn}</div>

          <div className="postImageContainer">
            <img
              className="postImage"
              src={require("../../images/" + post.postImage)}
              alt="Imagen"
            />
          </div>
          <div className="cuerpo">{post.postText}</div>

          <nav className="cambiardePost">
            <Link className="volverButton" to={`/post/${post.id - 1}`}>
              Anterior &lt;&lt;
            </Link>
            <Link className="volverButton" to="/">
              Volver
            </Link>
            <Link className="volverButton" to={`/post/${post.id + 1}`}>
              &gt;&gt; Siguiente
            </Link>
          </nav>
        </Card>
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Post;
