import React from "react";


const Users: React.FC = ({}) => (
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
        <button className="blueButton1">
          <img
            className="mr-10"
            width={20}
            height={20}
            src="/images/filter.svg "
            alt="filter"
          />
          Filtre
        </button>

        <button className="blueButton2">
          <img
            className="mr-10 mb-3"
            width={20}
            height={20}
            src="/images/sort.svg "
            alt="sort"
          />
          Sortare
        </button>

        <button className="blueButton2">
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
          <th>Block</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
        </tr>
        <tr>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
        </tr>
        <tr>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
        </tr>
        <tr>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
        </tr>
        <tr>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
        </tr>
        <tr>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
          <td>Form</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default Users;
