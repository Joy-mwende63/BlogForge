import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-family: "Arial", sans-serif;
  font-weight: 700;
  margin: 0;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <NavbarLinks>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/create">Create Post</NavbarLink>
        <NavbarLink to="/login">Login</NavbarLink>
        <NavbarLink to="/signup">Signup</NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;

