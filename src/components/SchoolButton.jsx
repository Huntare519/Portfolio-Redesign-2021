import React from "react";
import "./components.css";

class SchoolButton extends React.Component {
  render() {
    return <button className="btn">{this.props.name}</button>;
  }
}

export default SchoolButton;
