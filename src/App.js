import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";

import SchoolButton from "./components/SchoolButton";
import SubHeading from "./components/SubHeading";
import Name from "./components/Name";
import StudiesPage from "./pages/StudiesPage";
import MorePage from "./pages/MorePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute" }}>
        <Particles id="particles-js"height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <Router>
        <Container class="container-fluid">
          <Route path="/" exact>
            <Row className="row-1 text-center">
              <Col class="col-height col-sm-12 col-lg-4"> </Col>
              <Col class=""></Col>
              <Col class=""></Col>
            </Row>
            <Row className="row-2 text-center">
              <Col className="col-sm-12 col-lg-4 mx-auto d-block">
                {" "}
                <NavLink to="/studies">
                  <SchoolButton name="STUDIES"></SchoolButton>
                </NavLink>
                <NavLink to="/about">
                  <SchoolButton name="ABOUT"></SchoolButton>
                </NavLink>
              </Col>
              <Col className="col-sm-12 col-lg-4  mx-auto d-block">
                <div>
                  <Name title="Hunter Finnian Goff"></Name>
                  <SubHeading></SubHeading>
                </div>
              </Col>
              <Col className="col-sm-12 col-lg-4 mx-auto d-block">
                <NavLink to="/projects">
                  <SchoolButton name="PROJECTS"></SchoolButton>
                </NavLink>
                <NavLink to="/more">
                  <SchoolButton name="MORE"></SchoolButton>
                </NavLink>
              </Col>
            </Row>
            <Row className="row-3 text-center align-items-bottom">
              <Col className="col-4">
                {" "}
                <h6 className="contact">
                  contact me at{" "}
                  <u>
                    <a
                      className="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"mailto: hfgoff@wisc.edu"}
                    >
                      {" "}
                      hfgoff@wisc.edu{" "}
                    </a>
                  </u>
                </h6>
              </Col>
              <Col>
                {" "}
                <h6 className="contact">
                  visit my
                  <a
                    className="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/huntergoff/"
                  >
                    <u> LinkedIn</u>{" "}
                  </a>
                  profile
                </h6>
              </Col>
              <Col>
                {" "}
                <h6 className="contact">
                  check out my{" "}
                  <a
                    className="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Huntare519"
                  >
                    <u>GitHub</u>
                  </a>{" "}
                  account
                </h6>
              </Col>
            </Row>
          </Route>

          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/projects" render={() => <ProjectsPage />} />

          <Route path="/studies" render={() => <StudiesPage />} />
          <Route path="/more" render={() => <MorePage />} />
        </Container>
      </Router>
    </div>
  );
}
