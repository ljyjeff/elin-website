import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 600) {
      setShowMenu(false);
    }
  };

  return (
    <nav className="nav container">
      <div
        className={`nav__menu ${showMenu ? "show-menu" : ""}`}
        id="nav-menu"
      >
        <ul className="nav__list">
          <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Illustration
                </NavLink>
          </li>
          <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Comic
                </NavLink>
          </li>
          <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Children's Book
                </NavLink>
          </li>
          <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                About
                </NavLink>
          </li>
        </ul>
        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
          <IoClose />
        </div>
      </div>

      <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
        <IoMenu />
      </div>
    </nav>
  );
};

export default Navbar;