import React, { Component } from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";
import "./pages.css";
import AboutPhoto from "../components/AboutPhoto";
import TextAboutMe from "../components/TextAboutMe";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutPage extends Component {
  render() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute" }}>
          <Particles id="particles-js" height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Container className="container-fluid">
          <Row className="first-row">
            <Col className="col-sm-12">
              <p className="header"> About Me</p>
              <hr className="hor-line" />
            </Col>
          </Row>
          <Row className="second-row">
            <Col className="col-sm-12 col-lg-5">
              <AboutPhoto></AboutPhoto>
            </Col>
            <Col className="col-sm-12 col-lg-7 text-left">
              <TextAboutMe></TextAboutMe>
            </Col>
          </Row>
          <Row className="third-row">
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
