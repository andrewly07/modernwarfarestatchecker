import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 2rem 0 1rem;
  width: 80vw;
  margin: 0 auto;

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
