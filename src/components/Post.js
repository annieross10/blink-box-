import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Media, Button } from "react-bootstrap";
import axios from "axios";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    title,
    content,
    image,
    LoggedInHomePage,
  } = props;

  const [reactions, setReactions] = useState({
    likeCount: 0,
    loveCount: 0,
    laughCount: 0,
  });

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetchReactionCounts();
  }, []);

  const fetchReactionCounts = async () => {
    try {
      const likeResponse = await axios.get(`/Like/${id}`);
      const loveResponse = await axios.get(`/Love/${id}`);
      const laughResponse = await axios.get(`/Laugh/${id}`);

      setReactions({
        likeCount: likeResponse.data.like_count,
        loveCount: loveResponse.data.love_count,
        laughCount: laughResponse.data.laugh_count,
      });
    } catch (error) {
      console.error("Error fetching reaction counts:", error);
    }
  };

  const handleLikeClick = async () => {
    try {
      await axios.post(`/posts/${id}/like-count`);

      setReactions((prevReactions) => ({
        ...prevReactions,
        likeCount: prevReactions.likeCount + 1,
      }));
    } catch (error) {
      console.error("Error saving like reaction:", error);
    }
  };

  const handleLoveClick = async () => {
    try {
      await axios.post(`/loves/${id}`);

      setReactions((prevReactions) => ({
        ...prevReactions,
        loveCount: prevReactions.loveCount + 1,
      }));
    } catch (error) {
      console.error("Error saving love reaction:", error);
    }
  };

  const handleLaughClick = async () => {
    try {
      await axios.post(`/laughs/${id}`);

      setReactions((prevReactions) => ({
        ...prevReactions,
        laughCount: prevReactions.laughCount + 1,
      }));
    } catch (error) {
      console.error("Error saving laugh reaction:", error);
    }
  };

  const handleSaveClick = async () => {
    try {
      await axios.post(`/savedpost/${id}`);
      setIsSaved(true);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <Card className="post">
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/userprofile/${profile_id}`}>{owner}</Link>
          <div className="d-flex align-items-center">
            {LoggedInHomePage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Card.Img src={image} alt={title} />
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div>
          <Button
            variant="primary"
            onClick={handleLikeClick}
          >
            Like ({reactions.likeCount})
          </Button>{" "}
          <Button
            variant="danger"
            onClick={handleLoveClick}
          >
            Love ({reactions.loveCount})
          </Button>{" "}
          <Button
            variant="warning"
            onClick={handleLaughClick}
          >
            Laugh ({reactions.laughCount})
          </Button>{" "}
          <Button
            variant="success"
            onClick={handleSaveClick}
            disabled={isSaved}
          >
            Save
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;

