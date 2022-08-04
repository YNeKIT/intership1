import React, { useEffect, useState } from "react";
import Modali from "../modalW/modali";
import { nanoid } from "nanoid";
import Pagination from "./Pagination";
import Table from "./table";
import { Button } from "@material-ui/core";
import ProfilePage from "../Pages/ProfilePage";
import { Link } from "react-router-dom";
import axios from "../Api/axiosMockConfig";
import { getItems, mockapiCard, onAddToItemPost } from "../Api/axiosMock";

function Users() {
  const [isModalOpen, setModalState] = React.useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = React.useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState(10);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [blockUsers, setBlockUsers] = useState<any[]>([]);
  const [onAddItem, setItem] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = React.useState(false);

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

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const onAddToFavorite = async (contact) => {
    onAddToItemPost
      .postFavorites(contact)
      .then((response) => setFavorites(response.data.id))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        //todo
      });
  };
  const onAddToBlock = (contact) => {
    onAddToItemPost
      .postblockItem(contact)
      .then((response) => setFavorites(response.data.id));
  };

  const onRemoveItem = (id) => {
    mockapiCard.onRemoveContact(id);
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  React.useEffect(() => {
    ////////
    getItems.getContacts().then((res) => {
      setContacts(res.data);
      console.log(res.data);
    });
  }, []);

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
        onAddToBlock={onAddToBlock}
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
        currentContacts={currentContacts}
      />
    </>
  );
}

export default Users;
function index(index: any): void {
  throw new Error("Function not implemented.");
}
