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
      value: ''
  };

  handleChange = (e) => {
    this.setState({
        value: e.target.value
    });
  }

  handleSubmit = (e) => {
      console.log('form submitted')
    e.preventDefault();
  }

  getUserData = () => {

  }

  render() {
      console.log(this.state.value)
    return (
      <StatsMain>
        <Header
          title="Check Your Stats"
          subtitle="Fill in your info and let's see what you've got."
        />

        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>

      </StatsMain>
    );
  }
}

export default InputStats;
