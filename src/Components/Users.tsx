import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { Modali } from "../modalW/modali";

function Users(
 
  
) {
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);


  

  return (
    <>
      <div className="  ">
        <h1 className=" ml-50">Utilizatori</h1>
        <input
          className="searchB"
          src="/images/search.svg"
          alt="search"
          placeholder="Searching..."
        />
        <div className="butons">
          <button className="blueButtonfil">
            <img
              className="mr-10"
              width={20}
              height={20}
              src="/images/filter.svg "
              alt="filter"
            />
            Filtre
          </button>

          <button className="blueButtonUniv">
            <img
              className="mr-10 mb-3"
              width={20}
              height={20}
              src="/images/sort.svg "
              alt="sort"
            />
            Sortare
          </button>

          <button onClick={toggleModal} className="blueButtonUniv">
            <img
              className="mr-10 mt-3"
              width={20}
              height={20}
              src="/images/plus.svg "
              alt="plus"
            />
            Adauga
          </button>
        </div>
      </div>

      <table className="userTab">
        <thead>
          <tr>
            <th>Nume și prenume</th>
            <th>IDNP</th>
            <th>E-mail</th>
            <th>Telefon</th>
            <th>Functie</th>
            <th>Rol utilizator</th>
            <th>Block/Favorite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Form</td>
            <td>Form</td>
            <td>Form</td>
            <td>Form</td>
            <td>Form</td>
            <td>Form</td>
            <td>
              <button className="tablebtn">
                <img
                  width={15}
                  height={15}
                  src="/images/heart.svg" 
                  alt="closetype"
                />
              </button>
              <button className="tablebtn">
                <img
                  width={15}
                  height={15}
                  src="/images/close.svg"
                  alt="closetype"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modali title={":)"} isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default Users;
