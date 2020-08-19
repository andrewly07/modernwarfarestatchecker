import React from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import Stats from "./Stats";
import Error from "./Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaystation,
  faXbox,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const StatsMain = styled.section`
  padding-bottom: 4rem;
  width: 100vw;
  margin: 0 auto;
`;

const Headline = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  padding: 3rem 0;
`;

const FormMain = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin: 0.5rem 0;
    text-align: left;
    display: flex;
    align-items: center;
  }

  div input:hover {
    cursor: pointer;
  }

  span {
    color: #fff;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`;

const RadioButton = styled.input`
  height: 20px;
  width: 20px;
  margin: auto 0.5rem;
`;

const UserTextInput = styled.input`
  padding: 0.2rem 1rem;
`;

const UserLabel = styled.label`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin: 0.5rem 0;
  }

  input {
    width: 100%;
    letter-spacing: 1px;
    margin: 0.5rem 0 1rem;
    border: 1px dotted #97cde1;
    background: none;
    color: white;
    font-family: inherit;
    height: 3rem;
  }
`;

const TitleSpan = styled.span`
  font-weight: 700;
  position: relative;

  ::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #d0a137;
    position: relative;
    width: 10%;
    margin: 1rem auto;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.85rem;
`;

class InputStats extends React.Component {
  state = {
    success: null,
    userData: [],
    platform: "",
    username: "",
    errors: {
      platform: null,
      username: null,
    },
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleRadioChange = (e) => {
    this.setState({
      platform: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if ((this.state.platform === "") & (this.state.username === "")) {
      console.log("platform needs to be selected");
      this.setState({
        errors: {
          platform: true,
          username: true,
        },
      });
      e.preventDefault();
    } else if (this.state.username === "") {
      console.log("username needs to be selected");
      this.setState({
        errors: { username: true },
      });
      e.preventDefault();
    } else if (this.state.platform === "") {
      this.setState({
        errors: { platform: true },
      });
    } else if (this.state.platform !== "" && this.state.username !== "") {
      this.getUserData();
    }
    // this.getUserData();
    e.preventDefault();
  };

  handleClear = (e) => {
    this.setState({
      success: null,
      userData: [],
      platform: "",
      username: "",
      errors: {
        platform: null,
        username: null,
      },
    });
    console.log("handle clear data", this.state);
    e.preventDefault();
  };

  async getUserData() {
    let name = this.state.username;
    let plat = this.state.platform;

    let url = `https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${name}/${plat}`;
    const headers = {
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
      "x-rapidapi-key": "f20ce8e6b3mshe7fb7b3898a80a0p17c547jsncc06a03797e7",
    };

    await axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.lifetime) {
          console.log("true");
          this.setState({
            userData: response.data.lifetime,
            success: true,
          });
          return;
        } else if (response.data.error) {
          this.setState({
            success: false,
          });
          return;
        }
      });
  }

  render() {
    if (this.state.success === null) {
      return (
        <StatsMain>
          <Header
            title="Let's see what you've got, soldier."
            subtitle="*Multiplayer stats only, Warzone coming soon"
          />
          <FormMain onSubmit={this.handleSubmit}>
            <label onChange={this.handleRadioChange}>
              <TitleSpan>Platform</TitleSpan>
              <div>
                <RadioButton type="radio" value="psn" name="platform" />
                <span>
                  Playstation <FontAwesomeIcon icon={faPlaystation} />
                </span>
              </div>
              <div>
                <RadioButton type="radio" value="xbl" name="platform" />
                <span>
                  Xbox <FontAwesomeIcon icon={faXbox} />
                </span>
              </div>
              <div>
                <RadioButton type="radio" value="battle" name="platform" />
                <span>
                  PC <FontAwesomeIcon icon={faDesktop} />
                </span>
              </div>
              <div>
                <RadioButton type="radio" value="steam" name="platform" />
                <span>
                  Steam <FontAwesomeIcon icon={faSteam} />
                </span>
              </div>
              {this.state.errors.platform === true && (
                <ErrorText>Must select a platform</ErrorText>
              )}
            </label>
            <UserLabel>
              <TitleSpan>Username</TitleSpan>
              <span>(NOT Activision ID)</span>
              <UserTextInput
                type="text"
                placeholder="platform username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              {this.state.errors.username === true && (
                <ErrorText>Must give a username</ErrorText>
              )}
            </UserLabel>
            <input type="submit" value="Submit" className="btn-primary" />
          </FormMain>
        </StatsMain>
      );
    } else if (this.state.success === true) {
      return (
        <StatsMain>
          <Stats
            userStats={this.state.userData}
            username={this.state.username}
            platform={this.state.platform}
          />
          <button className="btn-primary" onClick={this.handleClear}>
            Search Again
          </button>
        </StatsMain>
      );
    } else if (this.state.success === false) {
      return (
        <StatsMain>
          <Error />
          <button className="btn-primary" onClick={this.handleClear}>
            Try Again
          </button>
        </StatsMain>
      );
    }
  }
}

export default InputStats;
