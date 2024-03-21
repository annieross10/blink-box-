import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, Alert, Button, Col, Row, Image, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { SetCurrentUserContext } from "../../App";
import loginimage from "../../assets/blinkbox-photo1.jpg";

function SignInForm() {
  const setCurrentUser = useContext(SetCurrentUserContext);

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/profile");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container fluid className="position-relative">
      <Image
        className={`${appStyles.FillerImage} position-absolute top-0 start-0 w-100 h-100`}
        src={loginimage}
        alt="Background"
        style={{ filter: "blur(8px)" }}
      />
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="text-center" style={{ zIndex: 1 }}>
          <Container className={`${appStyles.Content} p-4`} style={{ backgroundColor: "white", borderRadius: "8px" }}>
            <h1>Sign In</h1>
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
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Button type="submit">Sign in</Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
          <Link to="/signup" className="text-white">
            Don't have an account? <span style={{ color: "white" }}>Sign up now!</span>
          </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInForm;
