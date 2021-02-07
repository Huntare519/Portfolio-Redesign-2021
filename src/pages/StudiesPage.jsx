import React, { Component } from "react";
import "./pages.css";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class StudiesPage extends Component {
  render() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute" }}>
          <Particles id="particles-js" height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Container className="container-fluid">
          <Row className="first-div text-left">
            <Col>
              <p className="header"> College</p>
              <hr className="hor-line" />
              <p className="about-me text-left">
                {" "}
                I study Computer Engineering and Computer Science as a
                sophomore at the University of Wisconsin - Madison. I am
                interested in information secuity, product/project management, and design.{" "}
              </p>
              <p className="about-me text-left"> some classes I've taken </p>
              <p className="classes text-left">
                {" "}
                --{">"} Comp Sci 400: Java Programming 3{" "}
              </p>
              <p className="classes text-left">
                {" "}
                --{">"} Comp Sci 300: Java Programming 2{" "}
              </p>
              <p className="classes text-left">
                {" "}
                --{">"} ECE 203: Signals, Information, & Computation
              </p>
              <p className="classes text-left">
                {" "}
                --{">"} ECE 352: Digital System Fundamentals
              </p>
              <p className="about-me text-left">
                classes I'm enrolled in Spring 2021
              </p>
              <p className="classes text-left">
                {" "}
                --{">"} ECE 354: Machine Organization & Programming
              </p>
              <p className="classes text-left">
                {" "}
                --{">"} ECE 230: Circuit Analysis
              </p>
              <p className="classes text-left">
                {" "}
                --{">"} STAT 311: Intro to Mathematical Statistics
              </p>
            </Col>
          </Row>
          <Row className="second-div text-center">
            <Col>
              <p className="header-2 text-left"> Resume and other Docs</p>
              <hr className="hor-line" />
              <p className="classes">
                {" "}
                -- See my{" "}
                <a
                  className="a-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://uwmadison.box.com/s/5sq13wt892d9r96ne3ymzg4fzumv721h"
                >
                  <u>Resume</u>
                </a>{" "}
                here --
              </p>
              <p className="classes text-center">
                {" "}
                -- a{" "}
                <a
                  className="a-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://uwmadison.box.com/s/6njdvyuxyqjrfoaq84hwxryu321upi5p"
                >
                  <u>write-up</u>
                </a>{" "}
                of each class provided here --
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StudiesPage;
