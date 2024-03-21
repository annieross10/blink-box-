
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading post details...</p>;
  }

  return (
    <div>
      <h2>Post Detail</h2>
      {post && (
        <div>
          <p>Title: {post.title}</p>
          <p>Content: {post.content}</p>
          <img src={post.image} alt={post.title} />
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PostDetail;
