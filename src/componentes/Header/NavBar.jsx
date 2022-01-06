import React from "react";

function NavBar(props) {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <a href="">Postulate aquí</a>
          <div className="red" />
        </li>
        <li>
          <a href="">Vacantes</a>
          <div className="blue" />
        </li>
        <li>
          <a href="">Beneficios</a>
          <div className="yellow" />
        </li>
        <li>
          <a href="">Contactos</a>
          <div className="green" />
        </li>
      </ul>
    </>
  );
}

export default NavBar;
