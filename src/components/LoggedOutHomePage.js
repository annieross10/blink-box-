import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; 
import overviewImage from '../assets/overlay-image.jpg'; 

const LoggedOutHomePage = () => {
  return (
    <div className="position-relative">
      <Image
        src={overviewImage}
        alt="Overview"
        fluid
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ filter: "blur(8px)", zIndex: -1 }}
      />
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <div className="p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}>
            <Image src={logo} alt="logo" height="100" />
            <h1>Welcome to BlinkBox</h1>
            <p>BlinkBox is a platform for connecting users worldwide. Whether you're looking for new friends, exciting conversations, or meaningful connections, BlinkBox is the place to be. With a user-friendly interface and a vibrant community, BlinkBox offers a seamless experience for all users.</p>
            <NavLink to="/signup">
              <Button variant="primary" size="lg">Join Now</Button>
            </NavLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoggedOutHomePage;
