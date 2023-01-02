import { memo } from "react";
import "./Pagination.css";

/* This component used to
 * render numbers of pagination
 * Redirect page
 * Active page */

function Pagination({ capacityPage, totalData, onRedirect, currentPage }) {
  /*
   * capacityPage is quantity want to show in a page
   * total is total quantity sent from BE
   */

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / capacityPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination__wrapper">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item page-link ${
            currentPage === number ? "active" : null
          }`}
          onClick={() => {
            onRedirect(number);
          }}
        >
          {number}
        </li>
      ))}
    </nav>
  );
}

export default memo(Pagination);
