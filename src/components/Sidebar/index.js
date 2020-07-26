import React from "react";
import "./styles.css";
import Card from "../UI/Card";
import Novedades from "../Novedades";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebarContainer">
      <Card style={{ marginBottom: "20px" }}>
        <div className="sidebarTitulo"> Nosotros</div>
        <div className="sidebarTexto">
          Hub especializado en el estudio de la ciudad y creación de contenidos
          sobre urbanismo, sostenibilidad y ciudades inteligentes.
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="sidebarTitulo"> Redes Sociales</div>
        <div className="sidebarTexto">(proximamente)</div>
        <div className="sidebarIcons">
          <Link to="/" target="_blank" className="redesIconos">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="/" target="_blank" className="redesIconos">
            <i className="fab fa-twitter-square"></i>
          </Link>
          <Link to="/" target="_blank" className="redesIconos">
            <i className="fab fa-instagram-square"></i>
          </Link>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <div className="sidebarTitulo"> Recibe las novedades</div>
        <div className="sidebarTexto">
          <Novedades />
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
