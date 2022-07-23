import React from "react";
import { Button } from "@material-ui/core";
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
      <tbody >
        {currentContacts
          .filter((contacts) => contacts.fullname.toLowerCase().includes(query))

          .map((contact) => (
            <tr className="tabledes" key={contact.id}>
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
              <td className="tabledes">{contact.idnp}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.function}</td>
              <td>{contact.rol} </td>

              <td onClick={() => onAddToFavorite(contact)}>
                <Button onClick={onClickFavorite} className="tablebtn">
                  <img
                    width={15}
                    height={15}
                    src={
                      isFavorite ? "/images/heardlike.svg" : "/images/heart.svg"
                    }
                    alt="closetype"
                  />
                </Button>
                <Button
                  className="tablebtn"
                  onClick={() => onAddToBlock(contact)}
                >
                  <img
                    width={15}
                    height={15}
                    src="/images/blockuser.svg"
                    alt="closetype"
                  />
                </Button>

                <Button
                  className="baton"
                  onClick={() => onRemoveItem(contact.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
