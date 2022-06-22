import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
function Header() {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="info" light expand="md">
    <NavbarBrand>
      <Link to="/" className="text-white">
        LCO gitfire app
      </Link>
    </NavbarBrand>
    <NavbarText className="text-white">
      {context.user?.email ? context.user.email : ""   // This is to check if the user is logged in or not and display the email of the user if he is logged in 
      }
    </NavbarText>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        {context.user ? (
          <NavItem>
            <NavLink
              onClick={() => {
                context.setUser(null);
              }}
              className="text-white"
            >
              Logout
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/signup" className="text-white">
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signin" className="text-white">
                Signin
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Collapse>
  </Navbar>
  );
}

export default Header;

// context.user?.email
// Either to store in a variable and then drill down or use this to drill down 