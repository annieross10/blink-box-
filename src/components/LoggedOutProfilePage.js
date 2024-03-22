// UserProfile.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const UserProfile = () => {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Card className="mb-4">
        <Card.Body>
          <h1>{userProfile.username}'s Profile</h1>
          <p>{/* Display other profile information */}</p>
        </Card.Body>
      </Card>
      {/* Display other profile content */}
    </Container>
  );
};

export default UserProfile;
