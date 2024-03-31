import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import NavDropdown from "./NavDropdown";
import "./Navbar.css";

const childrensBookList = [{
  link: "/childrensbook/giantisland", displayText: "Giant Island"
}, {
  link: "/childrensbook/other", displayText: "Other"
}]

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
        id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <div className="nav__link">
              <NavLink to="/illustration" className="nav__link_text" onClick={closeMenuOnMobile}>
                Illustration
              </NavLink>
            </div>
          </li>
          <li className="nav__item nav__has_dropdown">
            <div className="nav__link nav__link_text">Children's Book</div>
            <div className="nav__dropdown">
              <NavDropdown items={childrensBookList} closeMainMenuOnMobile={closeMenuOnMobile} />
            </div>
          </li>
          {/*
          <li className="nav__item">
              <NavLink to="/childrensbook" className="nav__link" onClick={closeMenuOnMobile}>
                Children's Book
                </NavLink>
          </li>
          <li className="nav__item">
              <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                About
                </NavLink>
          </li> */}
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