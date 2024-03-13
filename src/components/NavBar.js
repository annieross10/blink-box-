import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;