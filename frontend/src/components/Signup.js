// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled Components
// const SignupContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f7f7f7;
// `;

// const SignupHeader = styled.h2`
//   font-size: 2rem;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const SignupForm = styled(Form)`
//   background-color: white;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 15px;
// `;

// const FormLabel = styled.label`
//   font-size: 1rem;
//   color: #333;
//   margin-bottom: 5px;
//   display: block;
// `;

// const FormField = styled(Field)`
//   width: 100%;
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #4CAF50;
//   color: white;
//   font-size: 1rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const Signup = () => {
//   const navigate = useNavigate();

//   const handleSignup = async (values) => {
//     try {
//       await axios.post('http://localhost:3001/signup', values); // Corrected the port to 3001
//       alert('Signup successful! Please log in.');
//       navigate('/login');
//     } catch (error) {
//       alert('User already exists or an error occurred.');
//     }
//   };
  

//   return (
//     <SignupContainer>
//       <SignupHeader>Signup</SignupHeader>
//       <Formik
//         initialValues={{ username: '', email: '', password: '' }}
//         onSubmit={handleSignup}
//       >
//         <SignupForm>
//           <FormGroup>
//             <FormLabel htmlFor="username">Username:</FormLabel>
//             <FormField type="text" name="username" required />
//           </FormGroup>
//           <FormGroup>
//             <FormLabel htmlFor="email">Email:</FormLabel>
//             <FormField type="email" name="email" required />
//           </FormGroup>
//           <FormGroup>
//             <FormLabel htmlFor="password">Password:</FormLabel>
//             <FormField type="password" name="password" required />
//           </FormGroup>
//           <SubmitButton type="submit">Signup</SubmitButton>
//         </SignupForm>
//       </Formik>
//     </SignupContainer>
//   );
// };

// export default Signup;


import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2c3e50; /* Dark blue background */
  background-image: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%); /* Gradient effect */
  color: white;
`;

const SignupHeader = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const SignupForm = styled(Form)`
  background-color: #ecf0f1; /* Light grey form background */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 8px;
  display: block;
`;

const FormField = styled(Field)`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid #bdc3c7;
  margin-top: 5px;
  background-color: #f5f5f5;

  &:focus {
    border-color: #3498db; /* Blue color when focused */
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db; /* Blue background */
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
    transform: scale(1.05);
  }

  &:active {
    background-color: #1c658c; /* Even darker blue when pressed */
    transform: scale(1);
  }
`;

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (values) => {
    try {
      await axios.post('http://localhost:3001/signup', values); // Corrected the port to 3001
      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (error) {
      alert('User already exists or an error occurred.');
    }
  };

  return (
    <SignupContainer>
      <SignupHeader>Sign Up</SignupHeader>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={handleSignup}
      >
        <SignupForm>
          <FormGroup>
            <FormLabel htmlFor="username">Username:</FormLabel>
            <FormField type="text" name="username" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormField type="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <FormField type="password" name="password" required />
          </FormGroup>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </SignupForm>
      </Formik>
    </SignupContainer>
  );
};

export default Signup;
