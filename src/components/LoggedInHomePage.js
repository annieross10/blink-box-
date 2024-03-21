import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import Post from "./Post";
import { axiosReq } from "../api/axiosDefaults";
import "../styles/Homepage.css";

const LoggedInHomePage = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axiosReq.get("/posts");
      if (response.data && response.data.results) {
        setPosts(response.data.results);
      } else {
        console.error("Invalid response data format:", response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleImageUpload = async () => {
    await fetchPosts();
  };

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2>{currentUser && currentUser.username ? currentUser.username : "User"}, how was your day...</h2>
            <PostForm handleImageUpload={handleImageUpload} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} lg={9} xl={8} className="text-center">
            {loading ? (
              <p>Loading posts...</p>
            ) : (
              posts.map((post) => (
                <Card key={post.id} className="mb-4">
                  <Card.Body>
                    <Post {...post} />
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoggedInHomePage;
