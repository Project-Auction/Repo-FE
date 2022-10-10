import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

import PopperWrapper from "../PopperWrapper";
import Image from "../Image";

import "./NavLinks.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth-context";
import ButtonFiled from "../../FormElement/Button";

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
        <div className="info__user">
          {authContext.isLoggedIn && (
            <>
              <Image
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/272959223_1371248186637583_4113757049488479156_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e1sjKhWMFTsAX_B6jKc&_nc_ht=scontent.fhan2-4.fna&oh=00_AT8w6-xBfM2TMv0-FWgwVtA-EUkEwnlDA1xQgV0szUBpiQ&oe=6349394E"
                className="avatar"
                alt="avatar"
                circle
              />
              <span>Nguyễn Hoàng Anh Tuấn</span>

              <div className="sub-list__info">
                <PopperWrapper>
                  <li>Personal Information</li>
                  <li>Transaction History</li>
                </PopperWrapper>
              </div>
            </>
          )}

          {!authContext.isLoggedIn && (
            <>
              <ButtonFiled primary onClick={authContext.login}>
                LOGIN
              </ButtonFiled>
            </>
          )}
        </div>
        {authContext.isLoggedIn && (
          <ButtonFiled onClick={authContext.logout} border size="small">
            LOGOUT
          </ButtonFiled>
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
