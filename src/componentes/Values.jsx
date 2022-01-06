import React from "react";
import "./values.css";
import Hand from "./svg/hand.png";

function Values(props) {
  return (
    <div className="values-container">
      <div>
        <h1 className="values-title">Nuestros valores</h1>
      </div>
      <div className="values-card-container">
        <div className="values-card">
          <img src={Hand} alt="" />
          <div>Agilidad</div>
          <p>Tomamos decisiones, actuamos rápido.</p>
        </div>
        <div className="values-card">
          <img src={Hand} alt="" />
          <div>Integridad</div>
          <p>Demostremos honestidad, transparencia y respeto en todo.</p>
        </div>
        <div className="values-card">
          <img src={Hand} alt="" />
          <div>Accountability</div>
          <p>Somos protagonistas, cumplimos nuestros compromisos.</p>
        </div>
        <div className="values-card">
          <img src={Hand} alt="" />
          <div>Orientación</div>
          <p>El cliente está en el centro de todo lo que hacemos</p>
        </div>
      </div>
      <div>
        <div className="values-card bottom-card">
          <img src={Hand} alt="" />
          <div>One team</div>
          <p>Somos una sola compañia global</p>
        </div>
      </div>
    </div>
  );
}

export default Values;
