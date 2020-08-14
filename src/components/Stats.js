import React from "react";
import Header from "./Header";
import styled from "styled-components";

import sq1 from "../assets/images/bg/square1.jpg";
import sq2 from "../assets/images/bg/square2.jpg";
import sq3 from "../assets/images/bg/square3.jpg";
import sq4 from "../assets/images/bg/square4.jpg";

const StatsMain = styled.section`
  padding-bottom: 4rem;
  /* width: 80vw; */
  margin: 0 auto;
`;

const StatsFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1rem 0;
  position: relative;

  :after {
    content: '';
    position: relative;
    background: #fbfcd1;
    height: 1px;
    width: 75%;
    margin: 0 auto;
    margin-top: 4rem;
    opacity: 0.4
  }
`;

const StatsIndividualMain = styled.div`
  padding: 2rem 1rem 0;
`;

const StatsRandomMain = styled.div`
  padding: 2rem 1rem 0;
`;

const StatsThird = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background: rgb(1, 28, 45);
    background: linear-gradient( 0deg, rgba(0, 0, 0, 0.8) 0%, rgba(29, 12, 28, 0.8) 100% );
    z-index: 1;
  }

  p {
    color: #fff;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    letter-spacing: 3px;
    text-transform: uppercase;
    z-index: 10;

    span {
      font-weight: 600;
    }
  }
`;

const Stats = ({ userStats, username }) => {
  console.log("users stats", userStats);
  const {
    avengerKills,
    c4Kills,
    carepackagesCaptured,
    comebackKills,
    deadSilenceKills,
    deathsFromBehind,
    destroyedKillstreaks,
    fragKills,
    hipfireKills,
    killstreakAirKills,
    launcherKills,
    launcherDeaths,
    lmgDeaths,
    lmgKills,
    longshotKills,
    meleeDeaths,
    molotovKills,
    pistolKills,
    pistolPeaths,
    semtexKills,
    shotgunDeaths,
    shotgunKills,
  } = userStats.accoladeData.properties;

  const {
    accuracy,
    assists,
    bestCaptures,
    bestConfirmed,
    bestDeaths,
    bestDefuses,
    bestDefends,
    bestKD,
    bestKillStreak,
    bestKills,
    bestPlants,
    bestRescues,
    bestScore,
    currentWinStreak,
    deaths,
    headshots,
    kdRatio,
    kills,
    losses,
    misses,
    recordLongestWinStreak,
    score,
    suicides,
    ties,
    timePlayedTotal,
    totalGamesPlayed,
    totalShots,
    winLossRatio,
    wins,
  } = userStats.all.properties;

  return (
    <StatsMain>
      <Header title={username} subtitle="Multiplayer Stats" />
      <StatsFlexWrap>
        <StatsThird img={sq1}>
          <p><span>wins:</span> {wins}</p>
          <p><span>Losses:</span> {losses}</p>
          <p><span>Overall K/D Ratio:</span> {kdRatio}</p>
          <p><span>Overall Kills:</span> {kills}</p>
          <p><span>Total Deaths:</span> {deaths}</p>
          <p><span>Total Games Played:</span> {totalGamesPlayed}</p>
          <p><span>Win/Loss Ratio:</span> {winLossRatio}</p>
          <p><span>Total Score:</span> {score}</p>
          <p><span>Total Ties:</span> {ties}</p>
        </StatsThird>
        <StatsThird img={sq2}>
          <p><span>Longest Win Streak:</span> {recordLongestWinStreak}</p>
          <p><span>Current Win Streak:</span> {currentWinStreak}</p>
          <p><span>Total Time Played:</span> {timePlayedTotal} minutes</p>
          <p><span>Total Shots:</span> {totalShots}</p>
          <p><span>Total Shots Missed:</span> {misses}</p>
          <p><span>Total Headshots:</span> {headshots}</p>
          <p><span>Suicides:</span> {suicides}</p>
          <p><span>Accuracy:</span> {accuracy}</p>
          <p><span>Total Assists:</span> {assists}</p>
        </StatsThird>
      </StatsFlexWrap>
      <StatsIndividualMain>
        <h4>Individual Game Stats</h4>
        <StatsFlexWrap>
          <StatsThird img={sq3}>
            <p><span>Most Kills:</span> {bestKills}</p>
            <p><span>Highest Killstreak:</span> {bestKillStreak}</p>
            <p><span>Best K/D Ratio:</span> {bestKD}</p>
            <p><span>Most Deaths:</span> {bestDeaths}</p>
            <p><span>Most Defends:</span> {bestDefends}</p>
            <p><span>Most Defuses:</span> {bestDefuses}</p>
          </StatsThird>
          <StatsThird img={sq4}>
            <p><span>Best Score:</span> {bestScore}</p>
            <p><span>Win/Loss Ratio:</span> {winLossRatio}</p>
            <p><span>Most Plants:</span> {bestPlants}</p>
            <p><span>Most Rescues:</span> {bestRescues}</p>
            <p><span>Most Captures:</span> {bestCaptures}</p>
            <p><span>Most Confirms:</span> {bestConfirmed}</p>
          </StatsThird>
        </StatsFlexWrap>
      </StatsIndividualMain>
      <StatsRandomMain>
        <h4>Individual Game Stats</h4>
        <StatsFlexWrap>
          <StatsThird img={"../assets/images/bg/square1.jpg"}>
            <p><span>Most Kills:</span> {bestKills}</p>
            <p><span>Highest Killstreak:</span> {bestKillStreak}</p>
            <p><span>Best K/D Ratio:</span> {bestKD}</p>
            <p><span>Most Deaths:</span> {bestDeaths}</p>
            <p><span>Most Defends:</span> {bestDefends}</p>
            <p><span>Most Defuses:</span> {bestDefuses}</p>
          </StatsThird>
          <StatsThird img={"../assets/images/bg/square1.jpg"}>
            <p><span>Best Score:</span> {bestScore}</p>
            <p><span>Win/Loss Ratio:</span> {winLossRatio}</p>
            <p><span>Most Plants:</span> {bestPlants}</p>
            <p><span>Most Rescues:</span> {bestRescues}</p>
            <p><span>Most Captures:</span> {bestCaptures}</p>
            <p><span>Most Confirms:</span> {bestConfirmed}</p>
          </StatsThird>
        </StatsFlexWrap>
      </StatsRandomMain>
    </StatsMain>
  );
};

export default Stats;
