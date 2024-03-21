import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "./NavBar";
import PostForm from "./PostForm";
import { axiosReq } from "../api/axiosDefaults";

const LoggedInHomePage = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchPosts = async () => { // Define fetchPosts function before useEffect
    try {
      const response = await axiosReq.get("/posts");
      setPosts(response.data);
      setLoading(false); // Set loading to false after fetching posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleImageUpload = async () => {
    // Fetch posts again after posting a new one
    await fetchPosts();
  };

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1>Welcome, {currentUser && currentUser.username}!</h1>
            <p>Tell us about your day!</p>
            {loading ? (
              <p>Loading posts...</p>
            ) : !Array.isArray(posts) || posts.length === 0 ? ( // Check if posts is not an array or empty
              <p>No posts available.</p>
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                {posts.map((post, index) => (
                  <div key={index} className="m-2">
                    <Image src={post.url} alt={`Uploaded ${index}`} fluid />
                    <p>User: {post.user}</p>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <PostForm handleImageUpload={handleImageUpload} />
          </Col>
        </Row>
      </Container>
    </>
  );
  
};

export default LoggedInHomePage;

