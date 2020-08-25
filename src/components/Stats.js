import React, { useEffect } from "react";
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
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
  @media (max-width: 550px) {
    font-size: 1.75rem;
  }
`;

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
  max-width: 1170px;
  margin: 0 auto;

  :after {
    content: "";
    position: relative;
    background: white;
    height: 2px;
    width: 10%;
    margin: 0 auto;
    margin-top: 4rem;
    opacity: 0.5;
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
  /* border: 1px dotted white; */
  background-size: cover;
  background-position: center;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0 2rem;
  border-top: none;
  border-bottom: none;

  @media (max-width: 550px) {
    width: 100%;
    border: none;
    padding: 0 1.5rem;
    padding-right: 0;
  }

  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    left: 0;
    background: rgb(1, 28, 45);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      #79d9ff7d 49%,
      #79d9ff7d 51%,
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  p {
    color: #fff;
    letter-spacing: 3px;
    text-transform: uppercase;
    z-index: 10;
    font-size: .875rem;
    font-weight: 600;

    span {
      font-weight: 400;
      color: #abe9ff;
    }
  }
`;

const StatsHalf = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0 2rem;
  border-top: none;
  border-bottom: none;

  @media (max-width: 550px) {
    width: 100%;
    border: none;
    padding: 0 1.5rem;
    padding-right: 0;
  }

  :before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    background: rgb(1, 28, 45);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      #79d9ff7d 49%,
      #79d9ff7d 51%,
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  p {
    color: #fff;
    letter-spacing: 3px;
    text-transform: uppercase;
    z-index: 10;
    font-size: 0.875rem;
    font-weight: 600;

    span {
      font-weight: 400;
      color: #abe9ff;
    }
  }
`;

const Stats = ({ userStats, username, platform }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {platform === "psn" && (
            <FontAwesomeIcon
              icon={faPlaystation}
              className="fa-user-right"
              color="rgb(0, 112, 209)"
            />
          )}
          {platform === "xbl" && (
            <FontAwesomeIcon
              icon={faXbox}
              className="fa-user-right"
              color="#107c10"
            />
          )}
          {platform === "battle" && (
            <FontAwesomeIcon
              icon={faDesktop}
              className="fa-user-right"
              color="#abdaf4"
            />
          )}
          {platform === "steam" && (
            <FontAwesomeIcon
              icon={faSteam}
              className="fa-user-right"
              color="#bebcba"
            />
          )}
        </UsernameHeader>
        <h4>Lifetime Multiplayer Stats</h4>
        <StatsFlexWrap>
          {/* <StatsUserHeader>
            <Username>
              Lifetime Played: {((timePlayedTotal / 60) / 60).toFixed(2)} hours
            </Username>
          </StatsUserHeader> */}
          {/* <StatsLifetimeHeader>
            <p>Total Time Played:
              <span>{((timePlayedTotal / 60) / 60).toFixed(2)} hours</span>
            </p>
            <p>
              Wins: 
              <span>
                {wins}
              </span>
            </p>
          </StatsLifetimeHeader> */}
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
              <span>Games Played:</span> {totalGamesPlayed}
            </p>
          </StatsThird>
          <StatsThird img={sq2}>
            <p>
              <span>Win/Loss Ratio:</span> {winLossRatio.toFixed(2)}
            </p>
            <p>
              <span>Total Score:</span> {score}
            </p>
            <p>
              <span>Total Ties:</span> {ties}
            </p>
            <p>
              <span>Longest Win Streak:</span> {recordLongestWinStreak}
            </p>
            <p>
              <span>Current Win Streak:</span> {currentWinStreak}
            </p>
            <p>
              <span>Lifetime Played:</span>{" "}
              {(timePlayedTotal / 60 / 60).toFixed(2)} hours
            </p>
          </StatsThird>
          <StatsThird>
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
              <span>Accuracy:</span> {accuracy.toFixed(3) * 100}%
            </p>
            <p>
              <span>Total Assists:</span> {assists}
            </p>
          </StatsThird>
        </StatsFlexWrap>
        <StatsIndividualMain>
          <h4>Individual Game Stats</h4>
          <StatsFlexWrap>
            <StatsHalf img={sq3}>
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
            </StatsHalf>
            <StatsHalf img={sq4}>
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
            </StatsHalf>
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
            </StatsThird>
            <StatsThird>
              <p>
                <span>Semtex Kills:</span> {semtexKills}
              </p>
              <p>
                <span>Shotgun Kills:</span> {shotgunKills}
              </p>
              <p>
                <span>Shotgun Deaths:</span> {shotgunDeaths}
              </p>
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
            </StatsThird>
            <StatsThird>
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
