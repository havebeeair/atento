import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <ScrollLink smooth={true} to="contactos">
            Postulate aquí
          </ScrollLink>
          <div className="red" />
        </li>
        <li>
          <Link className="nav-vacantes" to="/vacantes">
            Vacantes
          </Link>
          <div className="blue" />
        </li>
        <li>
          <ScrollLink smooth={true} to="beneficios">
            Beneficios
          </ScrollLink>
          <div className="yellow" />
        </li>
        <li>
          <ScrollLink smooth={true} to="contactos">
            Contactos
          </ScrollLink>
          <div className="green" />
        </li>
      </ul>
    </>
  );
}

export default NavBar;
