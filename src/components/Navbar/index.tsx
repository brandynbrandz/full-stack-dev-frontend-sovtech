import React from "react";
import { NavContainer, NavLogo, NavMenu, NavMenuItem } from "./styles";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <NavLogo><NavLink to="/">Persons Index</NavLink></NavLogo>
      <NavMenu>
          <NavMenuItem><NavLink to="/about">About</NavLink></NavMenuItem>
          <NavMenuItem><NavLink to="/contact">Contact</NavLink></NavMenuItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
