import React from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from 'axios'

const StatsMain = styled.section`
    padding-bottom: 4rem;
`;

class InputStats extends React.Component {
  state = {
      userData: [],
      platform: '',
      username: ''
  };

  handleChange = (e) => {
      console.log(e.target.value)
    this.setState({
        username: e.target.value
    });
  }

  handleRadioChange = (e) => {
      this.setState({
          platform: e.target.value
      })
      console.log(this.state.platform)
  }

  handleSubmit = (e) => {
      console.log('form submitted')
    e.preventDefault();
  }

  getUserData = () => {

  }

  render() {
      console.log(this.state.platform)
    return (
      <StatsMain>
        <Header
          title="Check Your Stats"
          subtitle="Fill in your info and let's see what you've got."
        />

        <form onSubmit={this.handleSubmit}>
            <label onChange={this.handleRadioChange}>
                Platform: 
                <input type="radio" value="ps4" name="platform"/>Playstation 4
                <input type="radio" value="xbox" name="platform"/>Xbox
                <input type="radio" value="pc" name="platform"/>PC
            </label>
            <label>
                Username:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>

      </StatsMain>
    );
  }
}

export default InputStats;
