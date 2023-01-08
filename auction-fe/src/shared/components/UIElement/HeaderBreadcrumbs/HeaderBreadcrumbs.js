import "./HeaderBreadcrumbs.css";
import React, { memo } from "react";
import { Link } from "react-router-dom";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderBreadcrumbs = (props) => {
  const { currentPage, prevPage = [{ name: "Home", redirectPath: "/" }] } =
    props;

  return (
    <div className="header__breadcrums-container">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="header__breadcrums-title">{currentPage}</h3>

        <div className="header__breadcrums-right-area">
          {prevPage.map((page, index) => (
            <React.Fragment key={index}>
              <Link to={page.redirectPath}>{page.name}</Link>
              <FontAwesomeIcon className="icon" icon={faAngleRight} />
            </React.Fragment>
          ))}
          <p>{currentPage}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderBreadcrumbs);
