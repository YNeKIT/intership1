import React, { useEffect, useState } from "react";
import Modali from "../modalW/modali";
import { nanoid } from "nanoid";
import Pagination from "./Pagination";
import axios from "axios";
import Table from "./table";
import { Button } from "@material-ui/core";

function Users() {
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  const [query, setQuery] = useState("");

  const [contacts, setContacts] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get("https://62ac57b7bd0e5d29af209f98.mockapi.io/contacts")
      .then((res) => {
        setContacts(res.data);
      });
  }, []);

  const [addFormData, setAddFormData] = useState({
    fullname: "",
    idnp: "",
    email: "",
    phone: "",
    function: "",
    rol: "",
    id: "",
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

  const onRemoveItem = (id) => {
    axios.delete(`https://62ac57b7bd0e5d29af209f98.mockapi.io/contacts/${id}`);
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState(10);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [favorites, setFavorites] = useState<any[]>([]);

  const onAddToFavorite = (contact) => {
    axios.post(
      "https://62ac57b7bd0e5d29af209f98.mockapi.io/favorites",
      contact
    );
    setFavorites((prev) => [...prev, contact]);
  };

  const [onAddItem, setItem] = useState<any[]>([]);

  const onAddToItem = (contact) => {
    axios.post(
      `https://62ac57b7bd0e5d29af209f98.mockapi.io/contacts/${contact}`,
      contacts
    );
    setItem((prev) => [...prev, contact]);
    console.log(contact);
  };

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
          <Button className="blueButtonfil">
            <img
              className="mr-10"
              width={20}
              height={20}
              src="/images/filter.svg "
              alt="filter"
            />
            Filtre
          </Button>

          <Button className="blueButtonUniv">
            <img
              className="mr-10 mb-3"
              width={20}
              height={20}
              src="/images/sort.svg "
              alt="sort"
            />
            Sortare
          </Button>

          <Button onClick={toggleModal} className="blueButtonUniv">
            <img
              className="mr-10 mt-3"
              width={20}
              height={20}
              src="/images/plus.svg "
              alt="plus"
            />
            Adauga
          </Button>
        </div>
      </div>

      <h1 className="searchplace">
        {query ? `Searching for: "${query}"` : ""}
      </h1>

      <Table
        currentContacts={currentContacts}
        query={query}
        onClickFavorite={onClickFavorite}
        isFavorite={isFavorite}
        onRemoveItem={onRemoveItem}
        onAddToFavorite={onAddToFavorite}
        // onFavorite={onFavorite}
      />
      <Pagination
        contactsPerPage={contactsPerPage}
        totalContacts={contacts.length}
        paginate={paginate}
      />

      <Modali
        isOpen={isModalOpen}
        onClose={toggleModal}
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange}
        onAddToItem={onAddToItem}
        // currentContacts={currentContacts}
      />
    </>
  );
}

export default Users;
function index(index: any): void {
  throw new Error("Function not implemented.");
}
