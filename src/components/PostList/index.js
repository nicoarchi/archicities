import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "../UI/Card";
import data from "../../data/posts.json";
import { Link } from "react-router-dom";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = data.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="postMaster">
      {posts.map((post) => {
        return (
          <div key={post.id} className="postContainer">
            <Card>
              <Link
                to={`/post/${post.id}`}
                className="postImageContainer postImagePort"
              >
                <img
                  className="postImage"
                  src={require("../../images/" + post.postImage)}
                  alt="Imagen"
                />
              </Link>
              <div className="titulo tituloPort">{post.postTitle}</div>
              <div className="fecha fechaPort">{post.postedOn}</div>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
};

/*
<Link to={`/post/${post.id}`}>
          <Card>
            <div className="postImageContainer postImagePort">
              <img
                className="postImage"
                src={require("../../images/" + post.postImage)}
                alt="Imagen"
              />
            </div>
            <div className="titulo">{post.title}</div>
            <div className="fecha fechaPort">{post.postedOn}</div>
          </Card>
        </Link>
*/

export default PostList;
