import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 2rem 0 2rem;
  width: 80vw;
  margin: 0 auto;
  text-transform: uppercase;

  h1 {
    font-size: 2rem;
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
