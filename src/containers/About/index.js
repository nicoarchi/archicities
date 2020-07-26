import React from "react";
import "./styles.css";
import Sidebar from "../../components/Sidebar";
import AboutUs from "../../components/AboutUs";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="container">
      <div className="about">
        <AboutUs />
        <div className="sidebarTexto">
          <span className="negrita">archicities </span> es un HUB especializado
          en el estudio de la ciudad y creación de contenidos sobre urbanismo,
          sostenibilidad y ciudades inteligentes.
          <br /> Para más información <Link to="/contact">contactenos</Link>.
        </div>
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default About;
