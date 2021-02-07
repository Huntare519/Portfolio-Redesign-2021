import React, { Component } from "react";
import "./pages.css";
import "./morepage.css";

import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class MorePage extends Component {
  render() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute" }}>
          <Particles id="particles-js" height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Container className="container-fluid">
          <Row className="row-header-projects">
            <Col className="col-12">
              {" "}
              <p className="header"> More About Me</p>
              <hr className="hor-line" />
            </Col>
          </Row>
          <Row className="row-height-more text-center">
            <Col className="col-12">
              <p className="more-text"> coming soon.</p>
            </Col>
            <Col className="col-12"> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MorePage;
