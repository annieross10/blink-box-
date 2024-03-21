import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";

function PostForm({ handleImageUpload }) {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content, image } = postData;
  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const selectedImage = event.target.files[0];
      setPostData({
        ...postData,
        image: selectedImage,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    try {
      await axiosReq.post("/posts/", formData);
      handleImageUpload(); 
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container style={{ backgroundColor: "#f5f5f5", border: "1px solid #ccc", borderRadius: "5px", padding: "20px", maxWidth: "800px", marginBottom: "20px" }}>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={title} onChange={handleChange} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "5px" }} />
              {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={6} name="content" value={content} onChange={handleChange} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "5px" }} />
              {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>
            <Form.Group>
              <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} ref={imageInput} label="Choose File" custom />
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>
            {/* Buttons */}
            <div>
              <Button type="submit" className="mr-2">Submit</Button>
              <Button onClick={() => history.goBack()}>Cancel</Button>
            </div>
          </Form>
        </Col>
        <Col md={6}>
          {/* Image preview */}
          {image && (
            <div className="text-center mt-3">
              <img src={URL.createObjectURL(image)} alt="Preview" className="img-fluid" style={{ maxHeight: "300px", border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PostForm;



