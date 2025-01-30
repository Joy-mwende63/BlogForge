import { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import styled from "styled-components";

// Styled Components
const FormContainer = styled.div`
  padding: 2rem;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

function PostForm({ token }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const decodedToken = jwtDecode(token);
    const post = {
      title,
      content,
      category_id: 1, // Replace with actual category selection
    };

    await createPost(post, token);
    navigate("/");
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default PostForm;
