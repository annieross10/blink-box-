import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';


const NavBar = () => {


  return (
    <Navbar className={styles.NavBar} bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="50"/>BLINKBOX
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink 
                exact
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to="/">Home</NavLink>
                <NavLink
                  className={styles.NavLink} 
                  activeClassName={styles.Active} 
                  to="/login">Login
                </NavLink>
                <NavLink 
                  className={styles.NavLink} 
                  activeClassName={styles.Active} 
                  to="/signup">
                    Sign Up
                </NavLink>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;