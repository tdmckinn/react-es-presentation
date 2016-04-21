
import React, { Component } from "react";
import { Heading } from "spectacle";
import Iframe from 'react-iframe';

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
       <Iframe url="http://www.dropbox.com" />
      </div>
    );
  }
}
