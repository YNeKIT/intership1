import React from "react";
import styled from "styled-components";

const Users: React.FC = ({}) => (
  <>
    <div className="d-flex  align center mb-10  ">
      <h1 className=" ml-50">Utilizatori</h1>
      <div className="SearchBlock  mt-30 ml-20">
        <img src="/images/search.svg" alt="search" />
        <input width={20} height={20} placeholder="Searching..." />

        <button className="ml-30">
          <img width={20} height={20} src="/images/filter.svg " alt="filter" />
          sdsdasdaasdasda
        </button>
        <button className="ml-30">
          <img width={20} height={20} src="/images/sort.svg " alt="sort" />
          zdzdaasdsds
        </button>
      </div>
    </div>
  </>
);

export default Users;
