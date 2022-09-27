import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links__list">
      <li>
        <NavLink to="/" end>
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink to="/about-us" end>
          ABOUT US
        </NavLink>
      </li>

      <li>
        <NavLink to="/service" end>
          SERVICE
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
