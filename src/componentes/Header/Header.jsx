import React, { useState } from "react";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import "./header.css";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="atento-title">ATENTO</div>
      <NavBar />
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
