import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 2rem 0 2rem;
  width: 80vw;
  margin: 0 auto;
  text-transform: uppercase;

  h1 {
    font-size: 2rem;
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  p {
    opacity: .6;
    @media (max-width: 768px) {
      font-size: .75rem;
    }
  }
`;

const Header = ({ title, subtitle }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </HeaderContainer>
  );
};

export default Header;
