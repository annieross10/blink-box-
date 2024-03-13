import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const LoginForm = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      await axios.post("/dj-rest-auth/login/", formData);
      // Redirect to the dashboard or home page after successful login
      history.push("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      // Handle errors here
    }
  };

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Container>
          <h1 className="text-center">Login</h1>
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

            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </Container>
      </Col>
    </Row>
  );
};

export default LoginForm;