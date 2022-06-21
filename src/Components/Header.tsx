import React from "react";
import { Link } from "react-router-dom";

interface Props {
  toggLeVisibility: () => void;
}

const Header: React.FC<Props> = ({ toggLeVisibility }) => (
  
  <header className="d-flex justify-between align-center p-10">
    <div className="d-flex align-center">
      <div onClick={toggLeVisibility} className="menu ">
        <img
          className="mr-20 cu-p d-flex"
          width={20}
          height={20}
          src="/images/menu.svg"
          alt="menutype"
        />
      </div>
      <Link to="/">
        <img
          className="mr-10 cu-p"
          width={40}
          height={40}
          src="/images/cardano-ada.svg"
          alt="Logotype"
        />
      </Link>
      <div>
        <h2 className="text-uppercase">AEO Dashboard </h2>
      </div>
    </div>

    <ul className="d-flex clear  ">
      <li className="mr-20 cu-p ">
        <img
          className="mr-10 cu-p d-flex "
          width={20}
          height={20}
          src="/images/bell.svg"
          alt="bell"
        />
      </li>
      <li className="mr-20  d-flex  ">
        <img
          className="mr-10 d-flex cu-p "
          width={20}
          height={20}
          src="/images/persona.svg"
          alt="users"
        />
        <span> Profile</span>
      </li>
    </ul>
    
  </header>
  
);

export default Header;
