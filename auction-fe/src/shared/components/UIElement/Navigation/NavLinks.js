import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

import PopperWrapper from "../PopperWrapper";
import Image from "../Image";

import "./NavLinks.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth-context";

function NavLinks() {
  const authContext = useContext(AuthContext);

  return (
    <div className="nav-links__list">
      <ul className="left">
        <li>
          <NavLink to="/" end className="nav-links__main">
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink to="/about-us" className="nav-links__main">
            ABOUT US
            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-links__main-icon"
            />
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
      <ul className="right">
        {authContext.isLoggedIn && (
          <div className="notification circle">
            <div className="ring">
              <FontAwesomeIcon icon={faBell} />
            </div>

            <span className="numbers__notify circle">2</span>
          </div>
        )}
        <div className="info__user">
          {authContext.isLoggedIn && (
            <Link to={`/3/profile`}>
              <Image className="avatar" alt="avatar" circle />
              <span className="name">{authContext.username}</span>
            </Link>
          )}

          {!authContext.isLoggedIn && (
            <>
              <Link to="/auth" className="btn__header">
                <FontAwesomeIcon icon={faUser} />
                <span>Register</span>
              </Link>

              <Link to="/auth" className="btn__header">
                <FontAwesomeIcon icon={faRightToBracket} />
                <span>Login</span>
              </Link>
            </>
          )}
        </div>
      </ul>
    </div>
  );
}

export default NavLinks;
