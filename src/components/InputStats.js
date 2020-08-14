import React from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import Stats from "./Stats";

const StatsMain = styled.section`
  padding-bottom: 4rem;
  width: 100vw;
  margin: 0 auto;
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
  margin-top: 1rem;
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
  }
`;

const TitleSpan = styled.span`
  font-weight: 700;
  position: relative;

  ::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #b70000;
    position: relative;
    width: 10%;
    margin: 1rem auto;
  }
`;

class InputStats extends React.Component {
  state = {
    success: null,
    userData: [],
    platform: "",
    username: "",
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
    this.getUserData();
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
        // console.log("response", response.data);
        if (response.data.lifetime) {
            console.log('true')
            this.setState({
                userData: response.data.lifetime,
                success: true
            })
            return
        } else if (response.data.error) {
            this.setState({
                success: false
            })
            return
        }
      });
  }

  render() {
    return (
      <StatsMain>
        {this.state.success ? (
          <Stats userStats={this.state.userData} username={this.state.username}/>
        ) : (
          <h1>False</h1>
        )}
        <Header
          title="Check Your Stats"
          subtitle="Let's see what you've got!"
        />

        <FormMain onSubmit={this.handleSubmit}>
          <label onChange={this.handleRadioChange}>
            <TitleSpan>Platform</TitleSpan>
            <div>
              <RadioButton type="radio" value="psn" name="platform" />
              <span>Playstation 4</span>
            </div>
            <div>
              <RadioButton type="radio" value="xbl" name="platform" />
              <span>Xbox</span>
            </div>
            <div>
              <RadioButton type="radio" value="battle" name="platform" />
              <span>PC</span>
            </div>
            <div>
              <RadioButton type="radio" value="steam" name="platform" />
              <span>Steam</span>
            </div>
          </label>
          <UserLabel>
            <TitleSpan>Username</TitleSpan>
            <span>(NOT gamertag ID)</span>
            <UserTextInput
              type="text"
              placeholder="platform username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </UserLabel>
          <input type="submit" value="Submit" />
        </FormMain>
        {/* <Stats userStats={this.state.userData}/> */}
      </StatsMain>
    );
  }
}

export default InputStats;
