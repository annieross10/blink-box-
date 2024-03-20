import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; 
import overviewImage from '../assets/overlay-image.jpg'; 
import { CurrentUserContext } from "../App";

const HomePage = () => {
  const currentUser = useContext(CurrentUserContext);
  const [imageFiles, setImageFiles] = useState([]);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles([...imageFiles, ...files]);
  };

  // Content for logged in user
  const loggedInContent = (
    <Row>
      <Col md={12} className="text-center">
        {currentUser && currentUser.username && (
          <h1>Welcome, {currentUser.username}!</h1>
        )}
        <p>Here are some posts from other users:</p>
        {/* Display uploaded images */}
        <div className="d-flex flex-wrap justify-content-center">
          {imageFiles.map((file, index) => (
            <div key={index} className="m-2">
              <Image src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} fluid />
              {currentUser && currentUser.username && (
                <p>User: {currentUser.username}</p>
              )}
              {/* Add other user details like time, etc. */}
            </div>
          ))}
        </div>
        <Form>
          <Form.Group controlId="imageUpload">
            <Form.Label>Upload an image:</Form.Label>
            <Form.Control type="file" onChange={handleImageUpload} multiple />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );

  // Content for logged out user
  const loggedOutContent = (
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
  );

  return (
    <Container className="mt-5">
      {currentUser ? loggedInContent : loggedOutContent}
    </Container>
  );
};

export default HomePage;