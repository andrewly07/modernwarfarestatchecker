import React from "react";
import styled from "styled-components";
import BgImage from "../assets/images/cod-hero.jpg";
import HeroLogo from '../assets/images/mw-wz-combined-logo.png'
import Title from "./Title";

const HeroMain = styled.section`
  height: 50vh;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
    @media (max-width: 767px) {
        background-attachment: scroll;
    }
`;

const Hero = () => {
  return (
    <HeroMain>
      <img src={HeroLogo} alt="Call of Duty Modern Warfare and Warzone Logo"/>
      {/* <Title
        title="Call of Duty: Modern Warfare"
        subtitle="Stat Checker"
        desc="Check wins/losses, favorite weapon, K/D ratio, and more"
      /> */}
    </HeroMain>
  );
};

export default Hero;
