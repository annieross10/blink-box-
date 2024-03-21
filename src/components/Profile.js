import React, { useContext } from "react";
import { CurrentUserContext } from "../App";
import { Container, Row, Col, Card } from "react-bootstrap";

const Profile = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Container>
      <Card className="mb-4">
        <Card.Body>
          <h1>{currentUser.username}'s Profile</h1>
          <p>This is {currentUser.username}'s profile page.</p>
        </Card.Body>
      </Card>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Your Posts</Card.Title>
              {/* Display user's own posts here */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Saved Posts</Card.Title>
              {/* Display user's saved posts here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
