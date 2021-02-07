import React, { Component } from "react";

import "./components.css";

class Name extends Component {
  render() {
    return <h2 className="name-primary"> {this.props.title} </h2>;
  }
}

export default Name;
