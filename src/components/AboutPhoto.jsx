import React, { Component } from "react";
import "./components.css";

import hunterPhoto from "../assets/1mbsize.png";

class AboutPhoto extends Component {
  render() {
    return (
      <div className="outside image">
        <img src={hunterPhoto} alt="hunter profile photo with LOTR" className="image"></img>
      </div>
    );
  }
}

export default AboutPhoto;
