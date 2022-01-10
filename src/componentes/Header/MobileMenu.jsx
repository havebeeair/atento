import React from "react";
import hamburger from "../../resources/iconos/hamburger.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

function MobileMenu({ open, setOpen }) {
  const handlerClick = () => {
    setOpen(!open);
  };
  return (
    <div className="mobileMenuContainer" id="burger">
      <button
        className={open ? "mobileMenuButton openButton" : "mobileMenuButton"}
        onClick={handlerClick}>
        {open ? "X" : <img width="37px" src={hamburger} />}
      </button>
      {open && (
        <div className="mobileMenulist">
          <ul className="mobileMenu">
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
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
