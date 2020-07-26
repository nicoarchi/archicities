import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Post from "./containers/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:postId" component={Post} />
      </div>
    </Router>
  );
}

export default App;
