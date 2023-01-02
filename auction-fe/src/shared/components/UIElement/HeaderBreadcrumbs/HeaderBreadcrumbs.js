import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./HeaderBreadcrumbs.css";

const HeaderBreadcrumbs = (props) => {
  const { currentPage, prevPage = "Home" } = props;

  return (
    <div className="header__breadcrums-container">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="header__breadcrums-title">{currentPage}</h3>

        <div className="header__breadcrums-right-area">
          <Link to="/">{prevPage}</Link>
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
          <p>{currentPage}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBreadcrumbs;
