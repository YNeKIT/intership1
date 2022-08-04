import { Input } from "@material-ui/core";
import React from "react";
import "./modal.scss";
import Users from "../Components/Users";
import { useState } from "react";
import axios from "axios";

function Modali({
  isOpen,
  onClose,
  handleAddFormChange,
  handleAddFormSubmit,
  currentContacts,
}) {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const [items, setItems] = useState<any[]>([]);
  const [onAddIteml, setItem] = useState<any[]>([]);

  const onAddToIteml = () => {
    axios
      .post("https://api.lensa.devebs.net/dashboard/auth/login", )
      .then((response) => setItem(response.data.id));
      
  };

  //   const [onAddItem, setItem] = useState<any[]>([]);

//   const onAddToItem = (state) => {
//     axios
//       .post("https://api.lensa.devebs.net/dashboard/auth/login", state)
//       .then((response) => setItem(response.data.id));
      
//   };

  return isOpen ? (
    <div className={"modal"}>
      <div
        ref={outsideRef}
        className={"modal__overlay"}
        onClick={handleCloseOnOverlay}
      />
      <div className={"modal__box"}>
        <button className={"modal__close"} onClick={onClose}></button>
        <div className={"modal__title"}></div>
        <div className={"modal__content"}></div>
        <div>
          <div className="moddas">
            <form onSubmit={handleAddFormSubmit} className="   mt-20 ml-40">
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
                name="fullname"
                placeholder="Numele"
                onChange={handleAddFormChange}
              />
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
                placeholder="parola"
                onChange={handleAddFormChange}
              />
            
              <button onClick={() => onAddToIteml()} className="modalbtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
  
}

export default Modali;
