import React, { Component } from "react";
import "./components.css";

class TextAboutMe extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="hunter"> Hi! I'm Hunter Goff</p>
        </div>
        <p className="things-about-me">
          {" "}
          I grew up in a suburb of St.Paul, Minnesota where I played soccer, read, ran, and enjoyed spending time outside. 
        </p>

        <p className="things-about-me">
          {" "}
          On campus, at the University of Wisconsin - Madison, I am a a part of the Capital Management Club, 
          Web Development Club, and Software Development Club. 
        </p>

        <p className="things-about-me">
          {" "}
          I also work at the UW-Madison Division of Information Technology as a Advanced Support Specalist (phones, chat, and email) at the Help Desk.
          We support students, staff, and faculty to help diagonse and troubleshoot various supported softwares and systems. 
        </p>

        <p className="things-about-me">
          {" "}
          I'm particulary interested in getting involved with engineering that
          is increasing how efficiently people use our collective resources.
        </p>
        <p className="things-about-me">
          {" "}
          I spend time outside of school and work designing satisfying websites, cooking,
          trying to homebrew, perfecting a cinnimon roll recipe, and learning about the stock market / economics.
        </p>
        <p className="things-about-me">
          {" "}
          Ask me about where to eat in Madison, Chelsea FC, or book recommendations. 
        </p>
      </div>
    );
  }
}

export default TextAboutMe;
