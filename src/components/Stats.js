import React from "react";
import Header from "./Header";
import styled from "styled-components";

const StatsMain = styled.section`
  padding-bottom: 4rem;
  width: 80vw;
  margin: 0 auto;
`;

const StatsFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1rem 3rem;
`;

const StatsIndividualMain = styled.div`
    background: #f3f3f3;
    padding: 2rem 1rem;
`;

const StatsRandomMain = styled.div`
    background: black;
    padding: 2rem 1rem;
`;

const StatsThird = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
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
        <StatsThird>
          <p>wins: {wins}</p>
          <p>Losses: {losses}</p>
          <p>Overall K/D Ratio: {kdRatio}</p>
          <p>Overall Kills: {kills}</p>
          <p>Total Deaths: {deaths}</p>
          <p>Total Games Played: {totalGamesPlayed}</p>
          <p>Win/Loss Ratio: {winLossRatio}</p>
          <p>Total Score: {score}</p>
          <p>Total Ties: {ties}</p>
        </StatsThird>
        <StatsThird>
          <p>Longest Win Streak: {recordLongestWinStreak}</p>
          <p>Current Win Streak: {currentWinStreak}</p>
          <p>Total Time Played: {timePlayedTotal} minutes</p>
          <p>Total Shots: {totalShots}</p>
          <p>Total Shots Missed: {misses}</p>
          <p>Total Headshots: {headshots}</p>
          <p>Suicides: {suicides}</p>
          <p>Accuracy: {accuracy}</p>
          <p>Total Assists: {assists}</p>
        </StatsThird>
      </StatsFlexWrap>
      <StatsIndividualMain>
      <h4>Individual Game Stats</h4>
      <StatsFlexWrap>
        <StatsThird>
          <p>Most Kills: {bestKills}</p>
          <p>Highest Killstreak: {bestKillStreak}</p>
          <p>Best K/D Ratio: {bestKD}</p>
          <p>Most Deaths: {bestDeaths}</p>
          <p>Most Defends: {bestDefends}</p>
          <p>Most Defuses: {bestDefuses}</p>
        </StatsThird>
        <StatsThird>
          <p>Best Score: {bestScore}</p>
          <p>Win/Loss Ratio: {winLossRatio}</p>
          <p>Most Plants: {bestPlants}</p>
          <p>Most Rescues: {bestRescues}</p>
          <p>Most Captures: {bestCaptures}</p>
          <p>Most Confirms: {bestConfirmed}</p>
        </StatsThird>
      </StatsFlexWrap>
      </StatsIndividualMain>
      <StatsRandomMain>
      <h4>Individual Game Stats</h4>
      <StatsFlexWrap>
        <StatsThird>
          <p>Most Kills: {bestKills}</p>
          <p>Highest Killstreak: {bestKillStreak}</p>
          <p>Best K/D Ratio: {bestKD}</p>
          <p>Most Deaths: {bestDeaths}</p>
          <p>Most Defends: {bestDefends}</p>
          <p>Most Defuses: {bestDefuses}</p>
        </StatsThird>
        <StatsThird>
          <p>Best Score: {bestScore}</p>
          <p>Win/Loss Ratio: {winLossRatio}</p>
          <p>Most Plants: {bestPlants}</p>
          <p>Most Rescues: {bestRescues}</p>
          <p>Most Captures: {bestCaptures}</p>
          <p>Most Confirms: {bestConfirmed}</p>
        </StatsThird>
      </StatsFlexWrap>
      </StatsRandomMain>
    </StatsMain>
  );
};

export default Stats;
