import React, { Component } from "react";
import "./pages.css";

import BudgetAppPhoto from "../assets/BudgetAppFull.png";
import ChessGamePhoto from "../assets/ChessPhotoOG.png";
import CS400Photo from "../assets/CS400Sharp.png";
import WebsitePhoto from "../assets/October2020.png";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class ProjectsPage extends Component {
  render() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute" }} className="particles-div">
        <Particles id="particles-js" height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Container className="container-fluid">
          <Row className="row-header-projects">
            <Col className="col-12">
              {" "}
              <p className="header"> Projects</p>
              <hr className="hor-line" />
            </Col>
          </Row>
          <Row className="row-height-projects text-center">
            <Col className="col-12 col-lg-6">
              <div>
                <img
                  className="card-img-top project-cards scale-img"
                  src={BudgetAppPhoto}
                  alt="Card image cap"
                ></img>
                <div class="card-body project-cards mx-auto">
                  <h6 class="card-title">Budget App with React, Javascript</h6>
                  <p class="card-text">
                    I built this personal budget applet over summer 2020 to
                    practice using React and Bootstrap 4. I hosted it using
                    Google's Firebase.
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://monthlybudgetapp.web.app"
                    class="card-link"
                  >
                    here's a link to it
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <div>
                <img
                  className="card-img-top project-cards scale-img"
                  src={ChessGamePhoto}
                  alt="Card image cap"
                ></img>
                <div class="card-body project-cards mx-auto">
                  <h6 class="card-title">Chess Game with Java, JavaFX</h6>
                  <p class="card-text">
                    I am building this chess game with Java 8 and JavaFX to
                    practice skills learned during CS400.
                  </p>
                  <a href="#" class="card-link">
                    this link with a video demo is coming soon
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row-height-2-projects text-center">
            <Col className="col-12 col-lg-6">
              <div>
                <img
                  class="card-img-top project-cards scale-img"
                  src={CS400Photo}
                  alt="Card image cap"
                ></img>
                <div class="card-body project-cards mx-auto">
                  <h6 class="card-title">
                    School Project with HTML, Javascript
                  </h6>
                  <p class="card-text">
                    My group built this State Street restaurant database/lookup
                    as our end of semester project. We used a CSV file to store
                    the data, html and javascript to write the website and
                    functions, and a cgi file to write it to the departmental
                    web server.
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://uwmadison.box.com/s/6njdvyuxyqjrfoaq84hwxryu321upi5p"
                    class="card-link"
                  >
                    here's a link to a document about my classes
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  className="card-img-top project-cards scale-img"
                  src={WebsitePhoto}
                  alt="Card image cap"
                ></img>
                <div className="card-body project-cards mx-auto">
                  <h6 className="card-title">
                    This Portfolio Website with React, Javascript, HTML
                  </h6>
                  <p class="card-text">
                    This portfolio webiste is in verison 2.0 (version 1.0
                    pictured) as my personal portfolio website. I built it using
                    React and basic javascript/html concepts learned in class.
                    The background was created by using particles.js, a
                    lightweight javascript library.
                  </p>
                  <a href="#" className="card-link">
                    this link to what I learned is coming soon
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectsPage;
