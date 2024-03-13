import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; 
import overviewImage from '../assets/overlay-image.jpg'; 

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center mb-4">
            <img src={logo} alt="logo" height="100" />
            <h1>Welcome to BlinkBox</h1>
          </div>
          <div className="text-center mb-4">
            <img src={overviewImage} alt="Overview" className="img-fluid" />
          </div>
          <p>
            BlinkBox is a platform for connecting users worldwide. Whether you're looking for new friends, exciting conversations, or meaningful connections, BlinkBox is the place to be.
          </p>
          <p>
            With a user-friendly interface and a vibrant community, BlinkBox offers a seamless experience for all users. Sign up today to explore everything BlinkBox has to offer.
          </p>
          <div className="text-center mt-4">
            <NavLink to="/signup">
              <Button variant="primary" className="mr-3">Sign Up</Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="outline-primary">Login</Button>
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;