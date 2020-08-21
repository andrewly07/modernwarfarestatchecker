import React from "react";
import styled from "styled-components";

const ErrorMain = styled.section`
  padding: 4rem 0 2rem;
  width: 80vw;
  margin: 0 auto;

  :before {
    margin-bottom: 3rem;
    content: "";
    height: 2px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      #79d9ff 20%,
      #79d9ff 80%,
      rgba(0, 0, 0, 0)
    );
    display: block;
    margin-top: 0;
  }

  h1 {
    font-size: 2rem;
    color: #d0a137;
  }
`;

const Error = () => {
  return (
    <ErrorMain>
      <h1>Incorrect Username or Platform</h1>
      <p>
        Double check to make sure your username and platform are correct and try
        again
      </p>
    </ErrorMain>
  );
};

export default Error;
