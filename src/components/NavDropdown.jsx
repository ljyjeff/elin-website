
import { NavLink } from "react-router-dom";
import "./NavDropdown.css";

const NavDropdown = ({ items, closeMainMenuOnMobile }) => {
  return (
    <>
      {items.map((item, i) =>
        <div key={i} className="nav__dropdown_item">
          <NavLink className="nav__dropdown_link" to={item.link} onClick={closeMainMenuOnMobile}>
            {item.displayText}
          </NavLink>
        </div>
      )}
    </>
  );
}

export default NavDropdown;
