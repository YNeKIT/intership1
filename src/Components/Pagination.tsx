import React from "react";
import "./Comp.modules.scss";
import Button from "@material-ui/core/Button";
import ReactPaginate from "react-paginate";

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className="pagination clear cu-p">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            onClick={() => paginate(number)}
            className="page-item"
          >
            <a>{number}</a>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
