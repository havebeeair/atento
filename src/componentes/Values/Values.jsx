import React from "react";
import "./values.css";
import accountability from "../../resources/iconos/icon-accountability.svg";
import agility from "../../resources/iconos/icon-agilidad.svg";
import integrity from "../../resources/iconos/icon-integridad.svg";
import oneteam from "../../resources/iconos/icon-oneteam.svg";
import orientation from "../../resources/iconos/icon-orientacion.svg";

function Values(props) {
  return (
    <div className="values-container">
      <div>
        <h1 className="values-title">Nuestros valores</h1>
      </div>
      <div className="values-card-container">
        <div className="values-card">
          <img height="130px" height="130px" src={agility} alt="" />
          <div>Agilidad</div>
          <p>Tomamos decisiones, actuamos rápido.</p>
        </div>
        <div className="values-card">
          <img height="130px" src={accountability} alt="" />
          <div>Integridad</div>
          <p>Demostremos honestidad, transparencia y respeto en todo.</p>
        </div>
        <div className="values-card">
          <img height="130px" src={integrity} alt="" />
          <div>Accountability</div>
          <p>Somos protagonistas, cumplimos nuestros compromisos.</p>
        </div>
        <div className="values-card">
          <img height="130px" src={orientation} alt="" />
          <div>Orientación</div>
          <p>El cliente está en el centro de todo lo que hacemos</p>
        </div>
      </div>
      <div>
        <div className="values-card bottom-card">
          <img height="130px" src={oneteam} alt="" />
          <div>One team</div>
          <p>Somos una sola compañia global</p>
        </div>
      </div>
    </div>
  );
}

export default Values;
