import React from "react";
import styled from "styled-components";
import BgImage from "../assets/images/cod-hero.jpg";
import Title from "./Title";

const HeroMain = styled.section`
  height: 60vh;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin-top: 4rem;
`;

const Hero = () => {
  return (
    <HeroMain>
      <Title
        title="Call of Duty: Modern Warfare"
        subtitle="Stat Checker"
        desc="Check wins/losses, favorite weapon, K/D ratio, and more"
      />
    </HeroMain>
  );
};

export default Hero;
