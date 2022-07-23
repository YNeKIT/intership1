import React from "react";
import { Link } from "react-router-dom";
import Profile from "./ProfileHead";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

interface Props {
  toggLeVisibility: () => void;
}

function Header({ toggLeVisibility }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
      <Link to="LogIn">
        <li className="mr-20 cu-p ">
          <img
            className="mr-10 mt-10 cu-p d-flex "
            width={20}
            height={20}
            src="/images/bell.svg"
            alt="bell"
          />
        </li>
        </Link>
        <hr />
         
        <div className="clear">
          <Button

            
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Profile
            <Profile/>
          </Button>
        
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="Profile">
              <MenuItem onClick={handleClose}>Profile</MenuItem>{" "}
            </Link>
            <Link to="/">
              <MenuItem onClick={handleClose}>Utilizatori</MenuItem>
            </Link>
            <Link to="LogOut">
              {" "}
              <MenuItem onClick={handleClose}> Log Out</MenuItem>{" "}
            </Link>
          </Menu>
        </div>
      </ul>
      
    </header>
   
  );
}
export default Header;
