import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: "happy",
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      mood: prevState.mood === "happy" ? "sad" : "happy",
    }));
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
