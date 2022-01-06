import React from "react";

function MobileMenu({ open, setOpen }) {
  const handlerClick = () => {
    setOpen(!open);
  };
  return (
    <div className="mobileMenuContainer" id="burger">
      <button
        className={open ? "mobileMenuButton openButton" : "mobileMenuButton"}
        onClick={handlerClick}
      >
        {open ? "X" : "="}
      </button>
      {open && (
        <div className="mobileMenulist">
          <ul className="mobileMenu">
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
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
