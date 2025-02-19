import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const intro = () => {
  return (
    <Container>
      <Header>
        <h1>FINLIFE Planner</h1>
        <ButtonContainer>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </ButtonContainer>
      </Header>
    </Container>
  );
};

export default intro;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 40px;
  border-radius: 15px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 9em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  cursor: pointer;
  color: #282c34;
  background-color: transparent;
  transition: color 0.3s ease;

  &::before {
    content: '';
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #0fd850 0%, #f9f047 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  &:hover::before {
    width: 9em;
  }

  &:hover {
    color: white;
  }
`;
