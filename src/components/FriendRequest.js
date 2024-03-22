import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const FriendRequest = ({ currentUser }) => {
  const [friendRequests, setFriendRequests] = useState([]);

  const fetchFriendRequests = async () => {
    try {
      const response = await axios.get("/friend-requests");
      setFriendRequests(response.data.results);
    } catch (error) {
      console.error("Error fetching friend requests:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchFriendRequests();
    }
  }, [currentUser]);

  const handleAcceptRequest = async (requestId) => {
    try {
      await axios.put(`/friend-requests/${requestId}`);
      fetchFriendRequests();
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleDeclineRequest = async (requestId) => {
    try {
      await axios.delete(`/friend-requests/${requestId}`);
      fetchFriendRequests();
    } catch (error) {
      console.error("Error declining friend request:", error);
    }
  };

  return (
    <div>
      <h3>Friend Requests</h3>
      {friendRequests.map((request) => (
        <Card key={request.id} className="mb-3">
          <Card.Body>
            <Card.Title>{`${request.sender} wants to be your friend.`}</Card.Title>
            <Button
              variant="primary"
              onClick={() => handleAcceptRequest(request.id)}
              className="mr-2"
            >
              Accept
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDeclineRequest(request.id)}
            >
              Decline
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FriendRequest;
