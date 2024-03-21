import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SetCurrentUserContext } from "../../App";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import appStyles from "../../App.module.css";
import loginimage from "../../assets/blinkbox-photo1.jpg";

const LogoutPage = () => {
  const setCurrentUser = useContext(SetCurrentUserContext);
  const history = useHistory();

  const handleLogout = () => {
    setCurrentUser(null);
    history.push("/login");
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
            <h1>Logout</h1>
            <p>Are you sure you want to log out?</p>
            <Button variant="primary" onClick={handleLogout}>Logout</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default LogoutPage;
