// import { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// // Styled Components
// const FormContainer = styled.div`
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 30px;
//   background-color: #fffbf0;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   background: linear-gradient(135deg, #ff9a8b, #ff6a00); /* Bright gradient */
// `;

// const FormTitle = styled.h2`
//   font-size: 2rem;
//   color: #fff;
//   margin-bottom: 25px;
//   text-align: center;
//   font-family: 'Arial', sans-serif;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   font-size: 1.1rem;
//   color: #fff;
//   margin-bottom: 8px;
//   display: block;
//   font-family: 'Arial', sans-serif;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   font-size: 1rem;
//   border: 1px solid #fff;
//   border-radius: 8px;
//   margin-top: 5px;
//   background-color: #fff;
//   color: #333;

//   &:focus {
//     border-color: #ff6a00;
//     outline: none;
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   font-size: 1rem;
//   border: 1px solid #fff;
//   border-radius: 8px;
//   margin-top: 5px;
//   background-color: #fff;
//   color: #333;

//   &:focus {
//     border-color: #ff6a00;
//     outline: none;
//   }
// `;

// const FileInput = styled.input`
//   width: 100%;
//   padding: 12px;
//   font-size: 1rem;
//   border: 1px solid #fff;
//   border-radius: 8px;
//   margin-top: 10px;
//   background-color: #fff;
//   color: #333;

//   &:focus {
//     border-color: #ff6a00;
//     outline: none;
//   }
// `;

// const ImagePreview = styled.img`
//   width: 100%;
//   max-width: 200px;
//   margin-top: 15px;
//   border-radius: 8px;
//   border: 2px solid #ff6a00;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #ff6a00;
//   color: white;
//   font-size: 1.2rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   margin-top: 20px;

//   &:hover {
//     background-color: #ff8c42;
//   }
// `;

// function PostForm({ token }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file)); // Display image preview
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     if (image) {
//       formData.append('image', image); // Append the image to FormData
//     }

//     try {
//       const response = await axios.post(
//         'http://localhost:3001/posts',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data', // Important for image upload
//           },
//         }
//       );
//       alert('Post created successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error creating post');
//     }
//   };

//   return (
//     <FormContainer>
//       <FormTitle>Create a Post</FormTitle>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>Title</Label>
//           <Input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Content</Label>
//           <TextArea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Upload Image</Label>
//           <FileInput
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           {imagePreview && <ImagePreview src={imagePreview} alt="Image Preview" />}
//         </FormGroup>
//         <SubmitButton type="submit">Create Post</SubmitButton>
//       </form>
//     </FormContainer>
//   );
// }

// export default PostForm;

import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #6e45e2, #88d3ce); /* Matching Navbar gradient */
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 25px;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #333;

  &:focus {
    border-color: #6e45e2;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #333;

  &:focus {
    border-color: #88d3ce;
    outline: none;
  }
`;

const FileInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #fff;

  &:focus {
    border-color: #88d3ce;
    outline: none;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  max-width: 200px;
  margin-top: 15px;
  border-radius: 8px;
  border: 2px solid #6e45e2;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6e45e2;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #88d3ce;
  }
`;

function PostForm({ token }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/posts',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Post created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error creating post');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Create a Post</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Content</Label>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Upload Image</Label>
          <FileInput type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && <ImagePreview src={imagePreview} alt="Image Preview" />}
        </FormGroup>
        <SubmitButton type="submit">Create Post</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default PostForm;
