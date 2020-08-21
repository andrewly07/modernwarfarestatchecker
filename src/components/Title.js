import React from "react";
import styled from "styled-components";

const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  height: 100%;

  h1 {
    font-size: 3rem;
    margin: 0 auto;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;

const Title = ({ title, subtitle, desc }) => {
  return (
    <TitleHeader>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <h4>{desc}</h4>
    </TitleHeader>
  );
};

export default Title;
