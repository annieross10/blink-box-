import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", formData);
      // Redirect to the profile page after successful signup
      history.push("/profile");
    } catch (err) {
      console.error("Sign up failed:", err);
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Container>
          <h1 className="text-center">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;