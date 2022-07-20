import React from "react";

function Table({
  currentContacts,
  query,
  onClickFavorite,
  isFavorite,
  onRemoveItem,
  onAddToFavorite,
  onAddToBlock,
}) {
  return (
    <table className="userTab">
      <thead>
        <tr>
          <th>Nume și prenume</th>
          <th>idnp</th>
          <th>E-mail</th>
          <th>Telefon</th>
          <th>Functie</th>
          <th>Rol utilizator</th>
          <th>Block/Favorite</th>
        </tr>
      </thead>
      <tbody>
        {currentContacts
          .filter((contacts) => contacts.fullname.toLowerCase().includes(query))
          // .toLowerCase().includes(query)
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
              <td>{contact.rol} </td>

              <td onClick={() => onAddToFavorite(contact)}>
                <button onClick={onClickFavorite} className="tablebtn">
                  <img
                    width={15}
                    height={15}
                    src={
                      isFavorite ? "/images/heardlike.svg" : "/images/heart.svg"
                    }
                    alt="closetype"
                  />
                </button>
                <button
                  className="tablebtn"
                  onClick={() => onAddToBlock(contact)}
                >
                  <img
                    width={15}
                    height={15}
                    src="/images/blockuser.svg"
                    alt="closetype"
                  />
                </button>

                <button
                  className="dangerbutton"
                  onClick={() => onRemoveItem(contact.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
