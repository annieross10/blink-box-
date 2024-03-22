import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";
import SearchBar from "./SearchBar"; 

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Navbar className={`${styles.NavBar} navbar-dark`} bg="dark" expand="md" fixed="top">
      <Container>
        
        {currentUser ? (
          <NavLink to="/home"> 
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" /> BLINKBOX
            </Navbar.Brand>
          </NavLink>
        ) : (
          <NavLink to="/"> 
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" /> BLINKBOX
            </Navbar.Brand>
          </NavLink>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <SearchBar />

          <Nav className="ml-auto text-left">
           
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to={currentUser ? "/home" : "/"}
            >
              Home
            </NavLink>

            {currentUser ? (
              <>
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/profilepage"
                >
                  Profile
                </NavLink>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/logout"
                >
                  Sign Out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/login"
                >
                  <i className="fas fa-sign-in-alt"></i> Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                >
                  <i className="fas fa-user-plus"></i> Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
