import React, { useState } from "react";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import "./header.css";
import Logo from "../../resources/iconos/logo.svg";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-container">
      <MobileMenu open={open} setOpen={setOpen} />
      <div className="atento-title">
        <img src={Logo} alt="Atento logo" />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
