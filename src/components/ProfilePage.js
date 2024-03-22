import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../App";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios"; 
import Post from "./Post"; 

const Profile = () => {
  const currentUser = useContext(CurrentUserContext);
  const [userPosts, setUserPosts] = useState([]); 

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        if (currentUser) {
          const response = await axios.get("/posts"); 
          
          const userPostsData = response.data.results.filter(post => post.owner === currentUser.username);
          setUserPosts(userPostsData); 
        }
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts(); 
  }, [currentUser]);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Card className="mb-4">
        <Card.Body>
          <h1>{currentUser.username ? `${currentUser.username}'s Profile` : "Profile"}</h1>
          <p>{currentUser.username ? `This is ${currentUser.username}'s profile page.` : "User profile information unavailable."}</p>
        </Card.Body>
      </Card>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Your Posts</Card.Title>
              {Array.isArray(userPosts) && userPosts.map(post => (
                <Post
                  key={post.id}
                  owner={post.owner}
                  profile_id={post.profile_id}
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  LoggedInHomePage={true} 
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Saved Posts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;



