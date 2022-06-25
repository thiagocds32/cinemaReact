import React, { useState } from "react";

import "../../Style/hamburguerMenuStyle.css";

const MenuHamburguer = ({ hideMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    hideMenu(!menuOpen);
  };
  return (
    <>
      <li>
        <div
          className={menuOpen === true ? "menu-btn open" : "menu-btn"}
          type="button"
          aria-expanded="false"
          onClick={handleMenu}
        >
          <div class="menu-btn_burger"></div>
        </div>
      </li>
    </>
  );
};

export default MenuHamburguer;
