import React from "react";
import "./styles.css";

const AboutUs = (props) => {
  return (
    <div className="aboutBar">
      <div className="investigacion">
        <div className="aboutIcon">
          <i className="fas fa-newspaper"></i>
        </div>
        <div className="aboutText">Investigación</div>
      </div>

      <div className="proyectos">
        <div className="aboutIcon">
          <i className="fas fa-city"></i>
        </div>
        <div className="aboutText">Proyectos</div>
      </div>

      <div className="consultoria">
        <div className="aboutIcon">
          <i className="far fa-chart-bar"></i>
        </div>
        <div className="aboutText">Consultoría</div>
      </div>
    </div>
  );
};

export default AboutUs;
