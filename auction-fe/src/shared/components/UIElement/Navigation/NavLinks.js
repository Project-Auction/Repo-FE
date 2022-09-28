import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

import PopperWrapper from "../PopperWrapper";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links__list">
      <li>
        <NavLink to="/" end className="nav-links__main">
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink to="/about-us" className="nav-links__main">
          ABOUT US
          <FontAwesomeIcon icon={faChevronDown} className="nav-links__main-icon" />
        </NavLink>

        <div className="sub-nav">
          <PopperWrapper className="sub-nav__popper">
            <div className="sub-nav__item">
              <Link to="service">SERVICE</Link>
            </div>
            <div className="sub-nav__item">
              <Link to="/service1">SINGLE SERVICE</Link>
            </div>
          </PopperWrapper>
        </div>
      </li>

      <li>
        <NavLink to="/service" className="nav-links__main">
          SERVICE
        </NavLink>
      </li>

      <li>
        <NavLink to="/admin" className="nav-links__main">
          ADMIN
        </NavLink>
      </li>

      <li>
        <NavLink to="/payment" className="nav-links__main">
          PAYMENT
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
