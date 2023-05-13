import React from "react";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";
import Logo from "../../Images/logo.svg"

function Header() {
  return (
    <header className="header__container">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={Logo} alt="logo" />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </header>
  );
}

export default Header;
