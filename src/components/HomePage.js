import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; 
import overviewImage from '../assets/overlay-image.jpg'; 

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <Image src={logo} alt="logo" height="100" />
          <h1>Welcome to BlinkBox</h1>
          <p>BlinkBox is a platform for connecting users worldwide. Whether you're looking for new friends, exciting conversations, or meaningful connections, BlinkBox is the place to be. With a user-friendly interface and a vibrant community, BlinkBox offers a seamless experience for all users.</p>
          <NavLink to="/signup">
            <Button variant="primary" size="lg">Join Now</Button>
          </NavLink>
        </Col>
        <Col md={6} className="text-center">
          <Image src={overviewImage} alt="Overview" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;