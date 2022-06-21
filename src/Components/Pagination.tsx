import React from "react";
import "./Comp.modules.scss";

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className="pagination clear cu-p">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="page-item"
          >
            <a>{number}</a>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
