import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
                <div className="btn-group">
                  <span>SUPPORT 24/7</span>
                  <Button className="faphone">
                    <FaPhone className="p-2 fs-2" />
                  </Button>
                </div>
              </h6>
            </Col>
          </Row>
        </Container>
        <Container className="cards">
          <Row className="cards_row">
            <Col md={3} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <FaClock className="p-2 fs-1 faclock rounded-circle " />
                  </h4>
                </div>

                <div>
                  <h4>
                    CREATIVE <br />
                    <span className="">SOLUTIONS</span>
                  </h4>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <div className="btn-group">
                  <span>MORE INFO</span>
                  <Button className="faarow">
                    <FaArrowRight className="p-2 fs-2" />
                  </Button>
                </div>
              </h6>
            </Col>
            <Col md={3} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <FaThumbsUp className="p-2 fs-1 faclock rounded-circle " />
                  </h4>
                </div>

                <div>
                  <h4>
                    BEST <br />
                    <span className="">SERVICES</span>
                  </h4>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <div className="btn-group">
                  <span>MORE INFO</span>
                  <Button className="faarow">
                    <FaArrowRight className="p-2 fs-2" />
                  </Button>
                </div>
              </h6>
            </Col>
            <Col md={3} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <FaLightbulb className="p-2 fs-1 faclock rounded-circle " />
                  </h4>
                </div>

                <div>
                  <h4>
                    GLOBAL <br />
                    <span className="">IDEAS</span>
                  </h4>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <div className="btn-group">
                  <span>MORE INFO</span>
                  <Button className="faarow">
                    <FaArrowRight className="p-2 fs-2" />
                  </Button>
                </div>
              </h6>
            </Col>
            <Col md={3} className="mb-5">
              <div className="d-flex flex-row">
                <div className="me-3">
                  <h4>
                    <FaSearch className="p-2 fs-1 faclock rounded-circle " />
                  </h4>
                </div>

                <div>
                  <h4>
                    PRO <br />
                    <span className="">RESEARCH</span>
                  </h4>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vestibulum rhoncus est
                pellentesque magna.
              </p>
              <h6>
                <div className="btn-group">
                  <span>MORE INFO</span>
                  <Button className="faarow">
                    <FaArrowRight className="p-2 fs-2" />
                  </Button>
                </div>
              </h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default FirstSection;
