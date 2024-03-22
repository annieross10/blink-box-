import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { Form, Alert, Button, Col, Row, Image, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import signupimage from "../../assets/blinkbox-photo2.jpg";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/profilepage");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container fluid className="position-relative">
      <Image
        className={`${appStyles.FillerImage} position-absolute top-0 start-0 w-100 h-100`}
        src={signupimage}
        alt="Background"
        style={{ filter: "blur(8px)" }}
      />
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="text-center" style={{ zIndex: 1 }}>
          <Container className={`${appStyles.Content} p-4`} style={{ backgroundColor: "white", borderRadius: "8px" }}>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password1">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password2">
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Button type="submit">Sign Up</Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link to="/login" className="text-white">
              Already have an account? <span style={{ color: "white" }}>Sign in</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;

