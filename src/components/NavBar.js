import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink} from "react-router-dom"
import HomePage from "./HomePage";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
    <NavLink to="/">
        <Navbar.Brand href={HomePage}><img src={logo} alt="logo" height="50"/>BLINKBOX
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
                to="/Login">Login</NavLink>
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} 
                to="/signup">
                <Button variant="light" href="#signup" className={styles["sign-up-link"]}>
                    Sign Up
                </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;