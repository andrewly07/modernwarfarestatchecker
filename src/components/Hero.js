import React from "react";
import styled from "styled-components";
import BgImage from "../assets/images/cod-hero.jpg";
import HeroLogo from "../assets/images/mw-stats-logo.png";
import Title from "./Title";

const HeroMain = styled.section`
  /* height: 32vh; */
  margin-top: 4rem;
  padding: 0 2rem;
  /* background-image: url(${BgImage}); */
  background: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35%;
  }
  @media (max-width: 950px) {
    img {
      width: 75%;
    }
  }
  @media (max-width: 767px) {
    background-attachment: scroll;
  }
  @media (max-width: 500px) {
    margin-top: 3rem;

    img {
      width: 100%;
    }
  }
`;

const Hero = () => {
  return (
    <HeroMain>
      <img src={HeroLogo} alt="Call of Duty Modern Warfare and Warzone Logo" />
    </HeroMain>
  );
};

export default Hero;
