import { Input } from "@material-ui/core";
import React from "react";
import "./modal.scss";
import Users from "../Components/Users";



interface ModaliProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}


export const Modali: React.FC<ModaliProps> = ({isOpen, onClose}) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };



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
            <input
              className="modinput"
              required
              name="name"
              placeholder="Numele"
             
            />
            <input
              className="modinput"
              required
              name="idnp"
              placeholder="Idnp"
            />
            <input
              className="modinput"
              required
              name="email"
              placeholder="Email"
            />
            <input
              className="modinput"
              required
              name="telefon"
              placeholder="telefon"
            />
            <input
              className="modinput"
              required
              name="functie"
              placeholder="Functie"
            />
            <input className="modinput" required name="rol" placeholder="Rol" />
            <button onClick={onClose}  className="modalbtn ">submit</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};


export default Modali;
