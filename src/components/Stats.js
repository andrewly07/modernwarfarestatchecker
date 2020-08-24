import React from "react";
import Header from "./Header";
import styled from "styled-components";

import sq1 from "../assets/images/bg/square1.jpg";
import sq2 from "../assets/images/bg/square2.jpg";
import sq3 from "../assets/images/bg/square3.jpg";
import sq4 from "../assets/images/bg/square4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaystation,
  faXbox,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const StatsMain = styled.section`
  padding-bottom: 4rem;
  margin: 0 auto;
`;

const UsernameHeader = styled.h1`
  padding-top: 2rem;
  font-size: 2.5rem;
`

const StatsErrorMain = styled.section`
  padding: 4rem 0 2rem;
  margin: 0 auto;
  width: 80vw;

  h1 {
    color: #fff;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    letter-spacing: 3px;
    text-transform: uppercase;

    ::after {
      content: "";
      display: block;
      height: 2px;
      background-color: #d0a137;
      position: relative;
      width: 10%;
      margin: 2rem auto;
    }
  }

  p {
    padding-top: 1rem;
  }
`;

const StatsFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 1rem 0;
  position: relative;

  :after {
    content: "";
    position: relative;
    background: #fbfcd1;
    height: 1px;
    width: 75%;
    margin: 0 auto;
    margin-top: 4rem;
    opacity: 0.4;
  }
`;

const StatsIndividualMain = styled.div`
  padding: 2rem 1rem 0;
`;

const StatsRandomMain = styled.div`
  padding: 2rem 1rem 0;
`;

const StatsThird = styled.div`
  /* background: url(${(props) => props.img}); */
  background: none;
  background-size: cover;
  background-position: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  align-items: center;

  @media (max-width: 550px) {
    width: 100%;
  }

  /* :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background: rgb(1, 28, 45);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(29, 12, 28, 0.9) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 1;
  } */

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

const Stats = ({ userStats, username, platform }) => {
  if (userStats.all.properties === null) {
    return (
      <StatsErrorMain>
        <h1>No Stats Available</h1>
        <p>
          You have an account for this platform but have not yet played the
          game. Try choosing a different platform.
        </p>
      </StatsErrorMain>
    );
  } else {
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
        <UsernameHeader>
          {username}
          {platform === 'psn' && <FontAwesomeIcon icon={faPlaystation} className="fa-user-right" color="rgb(0, 112, 209)"/>}
          {platform === 'xbl' && <FontAwesomeIcon icon={faXbox} className="fa-user-right" color="#107c10"/>}
          {platform === 'battle' && <FontAwesomeIcon icon={faDesktop} className="fa-user-right" color="#abdaf4"/>}
          {platform === 'steam' && <FontAwesomeIcon icon={faSteam} className="fa-user-right" color="#bebcba"/>}
        </UsernameHeader>
        <h4>Lifetime Multiplayer Stats</h4>
        <StatsFlexWrap>
          <StatsThird img={sq1}>
            <p>
              <span>wins:</span> {wins}
            </p>
            <p>
              <span>Losses:</span> {losses}
            </p>
            <p>
              <span>Overall K/D Ratio:</span> {kdRatio.toFixed(2)}
            </p>
            <p>
              <span>Overall Kills:</span> {kills}
            </p>
            <p>
              <span>Total Deaths:</span> {deaths}
            </p>
            <p>
              <span>Total Games Played:</span> {totalGamesPlayed}
            </p>
            <p>
              <span>Win/Loss Ratio:</span> {winLossRatio.toFixed(2)}
            </p>
            <p>
              <span>Total Score:</span> {score}
            </p>
            <p>
              <span>Total Ties:</span> {ties}
            </p>
          </StatsThird>
          <StatsThird img={sq2}>
            <p>
              <span>Longest Win Streak:</span> {recordLongestWinStreak}
            </p>
            <p>
              <span>Current Win Streak:</span> {currentWinStreak}
            </p>
            <p>
              <span>Total Time Played:</span> {((timePlayedTotal / 60) / 60).toFixed(2)} hours
            </p>
            <p>
              <span>Total Shots:</span> {totalShots}
            </p>
            <p>
              <span>Total Shots Missed:</span> {misses}
            </p>
            <p>
              <span>Total Headshots:</span> {headshots}
            </p>
            <p>
              <span>Suicides:</span> {suicides}
            </p>
            <p>
              <span>Accuracy:</span> {(accuracy.toFixed(3) * 100)}%
            </p>
            <p>
              <span>Total Assists:</span> {assists}
            </p>
          </StatsThird>
        </StatsFlexWrap>
        <StatsIndividualMain>
          <h4>Individual Game Stats</h4>
          <StatsFlexWrap>
            <StatsThird img={sq3}>
              <p>
                <span>Most Kills:</span> {bestKills}
              </p>
              <p>
                <span>Highest Killstreak:</span> {bestKillStreak}
              </p>
              <p>
                <span>Best K/D Ratio:</span> {bestKD.toFixed(2)}
              </p>
              <p>
                <span>Most Deaths:</span> {bestDeaths}
              </p>
              <p>
                <span>Most Defends:</span> {bestDefends}
              </p>
              <p>
                <span>Most Defuses:</span> {bestDefuses}
              </p>
            </StatsThird>
            <StatsThird img={sq4}>
              <p>
                <span>Best Score:</span> {bestScore}
              </p>
              <p>
                <span>Most Plants:</span> {bestPlants}
              </p>
              <p>
                <span>Most Rescues:</span> {bestRescues}
              </p>
              <p>
                <span>Most Captures:</span> {bestCaptures}
              </p>
              <p>
                <span>Most Confirms:</span> {bestConfirmed}
              </p>
            </StatsThird>
          </StatsFlexWrap>
        </StatsIndividualMain>
        <StatsRandomMain>
          <h4>Weapons / Lethal Stats</h4>
          <StatsFlexWrap>
            <StatsThird>
              <p>
                <span>Avenger Kills:</span> {avengerKills}
              </p>
              <p>
                <span>C4 Kills:</span> {c4Kills}
              </p>
              <p>
                <span>Care Packages Captured:</span> {carepackagesCaptured}
              </p>
              <p>
                <span>Dead Silence Kills:</span> {deadSilenceKills}
              </p>
              <p>
                <span>Deaths From Behind:</span> {deathsFromBehind}
              </p>
              <p>
                <span>Destroyed Killstreaks:</span> {destroyedKillstreaks}
              </p>
              <p>
                <span>Longshot Kills:</span> {longshotKills}
              </p>
              <p>
                <span>Semtex Kills:</span> {semtexKills}
              </p>
              <p>
                <span>Shotgun Kills:</span> {shotgunKills}
              </p>
              <p>
                <span>Shotgun Deaths:</span> {shotgunDeaths}
              </p>
            </StatsThird>
            <StatsThird>
              <p>
                <span>Frag Kills:</span> {fragKills}
              </p>
              <p>
                <span>Hip Fire Kills:</span> {hipfireKills}
              </p>
              <p>
                <span>Air Killstreak Kills:</span> {killstreakAirKills}
              </p>
              <p>
                <span>Launcher Kills:</span> {launcherKills}
              </p>
              <p>
                <span>Launcher Deaths:</span> {launcherDeaths}
              </p>
              <p>
                <span>LMG Kills:</span> {lmgKills}
              </p>
              <p>
                <span>LMG Deaths:</span> {lmgDeaths}
              </p>
              <p>
                <span>Melee Deaths:</span> {meleeDeaths}
              </p>
              <p>
                <span>Molotov Kills:</span> {molotovKills}
              </p>
              <p>
                <span>Pistol Kills:</span> {pistolKills}
              </p>
              <p>
                <span>Pistol Deaths:</span> {pistolPeaths}
              </p>
            </StatsThird>
          </StatsFlexWrap>
        </StatsRandomMain>
      </StatsMain>
    );
  }
};

export default Stats;
