import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from './Card';
import Div1Intro from './Div1Intro';
import Div2Intro from './Div2Intro';
import Div3Intro from './Div3Intro';
import Div4Intro from './Div4Intro';
import Div5Intro from './Div5Intro';

const Intro = () => {
    return (
        <PageContainer>
            <HeaderContainer>
                <Logo>FINLIFE Planner</Logo>
                <NavLinks>
                    <NavItem as={Link} to="/home">Home</NavItem> {/* Link to Home */}
                    <NavItem as={Link} to="/about">About</NavItem> {/* Link to About */}
                    <NavItem as={Link} to="/features">features</NavItem>
                    <NavItem as={Link} to="/pricing">pricing</NavItem>
                </NavLinks>
                <ButtonContainer>
                    <StyledButton as={Link} to="/login">Login</StyledButton>
                    <StyledButton as={Link} to="/signup">Sign Up</StyledButton>
                </ButtonContainer>
            </HeaderContainer>

            {/* Add the Card component below the header */}
            <CardContainer>
                <Div2Intro />
                <Div4Intro />
                <Div3Intro />
                <Div1Intro />
                <Div5Intro />
            </CardContainer>
        </PageContainer>
    );
};

export default Intro;

// Styled Components (unchanged)
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1100px;
  width: 100%;
  gap: 50;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #282c34;
  background-image: none;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
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
  background-color: transparent;
  color: rgb(235, 237, 242);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

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
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;