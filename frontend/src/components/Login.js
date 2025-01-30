// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled Components
// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(135deg, #6e45e2, #88d3ce); /* Matching Navbar colors */
// `;

// const LoginHeader = styled.h2`
//   font-size: 2.5rem;
//   color: #fff;
//   margin-bottom: 20px;
//   text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// `;

// const LoginForm = styled(Form)`
//   background-color: #fff;
//   padding: 40px;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   width: 100%;
//   max-width: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
//   width: 100%;
// `;

// const FormLabel = styled.label`
//   font-size: 1.2rem;
//   color: #333;
//   margin-bottom: 8px;
//   display: block;
//   font-family: 'Arial', sans-serif;
// `;

// const FormField = styled(Field)`
//   width: 100%;
//   padding: 12px;
//   font-size: 1.1rem;
//   border: 2px solid #ddd;
//   border-radius: 8px;
//   margin-top: 5px;
//   background-color: #f5f5f5;
//   color: #333;

//   &:focus {
//     border-color: #6e45e2;
//     outline: none;
//     background-color: #eef1ff;
//   }
// `;

// const ErrorMessage = styled.div`
//   font-size: 0.9rem;
//   color: #e74c3c;
//   margin-top: 5px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #6e45e2;
//   color: white;
//   font-size: 1.2rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #88d3ce;
//     transform: scale(1.05);
//   }

//   &:active {
//     background-color: #5b3fc4;
//     transform: scale(1);
//   }
// `;

// const Login = () => {
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:3001/login', values);

//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         alert('Login successful!');
//         navigate('/home');
//       } else {
//         alert('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Invalid login credentials');
//     }
//   };

//   return (
//     <LoginContainer>
//       <LoginHeader>Login</LoginHeader>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         onSubmit={handleLogin}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = 'Required';
//           } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//             errors.email = 'Invalid email address';
//           }
//           if (!values.password) {
//             errors.password = 'Required';
//           }
//           return errors;
//         }}
//       >
//         {({ errors, touched }) => (
//           <LoginForm>
//             <FormGroup>
//               <FormLabel htmlFor="email">Email:</FormLabel>
//               <FormField type="email" name="email" required />
//               {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
//             </FormGroup>
//             <FormGroup>
//               <FormLabel htmlFor="password">Password:</FormLabel>
//               <FormField type="password" name="password" required />
//               {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
//             </FormGroup>
//             <SubmitButton type="submit">Login</SubmitButton>
//           </LoginForm>
//         )}
//       </Formik>
//     </LoginContainer>
//   );
// };

// export default Login;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
`;

const LoginHeader = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

const LoginForm = styled(Form)`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  transition: all 0.3s ease;

  &:hover {
    background-color: #88d3ce;
    transform: scale(1.05);
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/login', values);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        navigate('/home'); // Navigate after login
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid login credentials');
    }
  };

  return (
    <LoginContainer>
      <LoginHeader>Login</LoginHeader>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
      >
        {({ errors, touched }) => (
          <LoginForm>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" required />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" required />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>
            <SubmitButton type="submit">Login</SubmitButton>
          </LoginForm>
        )}
      </Formik>
    </LoginContainer>
  );
};

export default Login;
