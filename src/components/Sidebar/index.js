import React from "react";
import "./styles.css";
import Card from "../UI/Card";
import Novedades from "../Novedades";

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
        <div className="sidebarTexto">Linkedin Twitter Instagram</div>
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
