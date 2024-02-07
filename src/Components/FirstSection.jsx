import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaClock,
  FaLightbulb,
  FaPhone,
  FaSearch,
  FaThumbsUp,
} from "react-icons/fa";

const FirstSection = () => {
  return (
    <div>
      <Container fluid className="firstsection_container">
        <Container className="mb-5">
          <Row className="d-flex flex-row justify-content-center">
            <Col md={7} className="firstsection pb-3">
              <h3>PROGRESSIVE BUSINESS THINKING</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col md={3} className="firstsection">
              <h6 className="mt-4">
                <span>SUPPORT 24/7</span> <FaPhone className="faphone" />
              </h6>
            </Col>
          </Row>
        </Container>
        <Container className="cards">
          <Row className="cards_row">
            <Col md={3} className="mb-5">
              <Row className="d-flex flex-row justify-content-center">
                <Col md={6}></Col>
                <Col>
                  <h4>
                    <FaClock className="faclock" />
                    &nbsp; CREATIVE <br />
                    <span className="mx-4">SOLUTIONS</span>
                  </h4>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <span>MORE INFO</span> &nbsp;{" "}
                <FaArrowRight className="faarow" />
              </h6>
            </Col>
            <Col md={3} className="mb-5">
              <Row className="d-flex flex-row justify-content-center">
                <Col md={8}></Col>
                <Col>
                  <h4>
                    <FaThumbsUp className="faclock" />
                    &nbsp; BEST <br />
                    <span className="mx-4">SERVICES</span>
                  </h4>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <span>MORE INFO</span> &nbsp;{" "}
                <FaArrowRight className="faarow" />
              </h6>
            </Col>
            <Col md={3} className="mb-5">
              <Row className="d-flex flex-row justify-content-center">
                <Col md={10}></Col>
                <Col>
                  <h4>
                    <FaLightbulb className="faclock" />
                    &nbsp; GLOBAL
                    <br /> <span className="mx-5">IDEAS</span>
                  </h4>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <span>MORE INFO</span> &nbsp;{" "}
                <FaArrowRight className="faarow" />
              </h6>
            </Col>
            <Col md={3} className="mb-5">
              <Row className="d-flex flex-row justify-content-center">
                <Col md={8}></Col>
                <Col>
                  <h4>
                    <FaSearch className="faclock" />
                    &nbsp; PRO
                    <br /> <span className="mx-4">RESEARCH</span>
                  </h4>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <span>MORE INFO</span> &nbsp;{" "}
                <FaArrowRight className="faarow" />
              </h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default FirstSection;
