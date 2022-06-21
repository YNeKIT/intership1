import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Modali } from "../modalW/modali";
import data from "../Server/data.json";
import { nanoid } from "nanoid";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Pagination from "./Pagination";

function Users() {
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  const [query, setQuery] = useState("");

  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    fullname: "",
    idnp: "",
    email: "",
    phone: "",
    function: "",
    rol: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullname: addFormData.fullname,
      idnp: addFormData.idnp,
      email: addFormData.email,
      phone: addFormData.phone,
      function: addFormData.function,
      rol: addFormData.rol,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleServiceRemouve = (index: any) => {
    const list = [...contacts];
    list.splice(index, 1);
    setContacts(list);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [contactsPerPage, setContactsPerPage] = useState(10);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <h1 className="pageName">Utilizatori</h1>
        <img
          className="searchinput"
          width={20}
          height={20}
          src="/images/search.svg "
          alt="sort"
        />
        <input
          className="searchB"
          placeholder="Searching..."
          onChange={(e) => setQuery(e.target.value)}
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
            <th>Nume și prenume</th>.<th>E-mail</th>
            <th>Telefon</th>
            <th>Functie</th>
            <th>Rol utilizator</th>
            <th>Block/Favorite</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts
            .filter((contacts) =>
              contacts.fullname.toLowerCase().includes(query)
            )

            .map((contact) => (
              <tr key={contact.id}>
                <td className="fullname">
                  <img
                    className="iconutil"
                    width={20}
                    height={20}
                    src="/images/usericon.svg "
                    alt="plus"
                  />
                  {contact.fullname}
                </td>
                <td>{contact.idnp}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.function}</td>
                <td>{contact.rol}</td>

                <td>
                  <button className="tablebtn">
                    <img
                      width={15}
                      height={15}
                      src="/images/heart.svg"
                      alt="closetype"
                    />
                  </button>
                  <button
                    className="tablebtn"
                    onClick={() => handleServiceRemouve(index)}
                  >
                    <img
                      width={15}
                      height={15}
                      src="/images/close.svg"
                      alt="closetype"
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        contactsPerPage={contactsPerPage}
        totalContacts={contacts.length}
        paginate={paginate}
      />

      {/* <form onSubmit={handleAddFormSubmit} className="   mt-20 ml-40">
        <input
          className="modinput"
          required
          name="fullname"
          placeholder="Numele"
          onChange={handleAddFormChange}
        />
        <input
          className="modinput"
          required
          name="idnp"
          placeholder="Idnp"
          onChange={handleAddFormChange}
        />
        <input
          className="modinput"
          required
          name="email"
          placeholder="Email"
          onChange={handleAddFormChange}
        />
        <input
          className="modinput"
          required
          name="phone"
          placeholder="telefon"
          onChange={handleAddFormChange}
        />
        <input
          className="modinput"
          required
          name="function"
          placeholder="Functie"
          onChange={handleAddFormChange}
        />
        <input
          className="modinput"
          required
          name="rol"
          placeholder="Rol"
          onChange={handleAddFormChange}
        />
        <button className="modalbtn  ">submit</button>
      </form> */}
      <Modali title={":)"} isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default Users;
function index(index: any): void {
  throw new Error("Function not implemented.");
}
