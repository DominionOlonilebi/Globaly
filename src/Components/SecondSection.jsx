import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const SecondSection = () => {
  return (
    <div>
      <Container fluid className="secondsection">
        <Container>
          <Row>
            <Col md={5} className="mb-5">
              <h4>WELCOME</h4>
              <h5 className="secondsection_submenu">TO OUR COMPANY</h5>
              <Row>
                <Col md={3}>
                  <img src="Images/mv2.jpg" alt="" className="img-fluid" />{" "}
                </Col>
                <Col md={6}>
                  <h6>MIKE SWART</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing smod
                    tempor incidi dunt dictum
                  </p>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. In
                hac habitasse platea dictumst vesti eiusmod tempor incidi bulum
                rhoncus est pellen quis blandit turpis cursus tesque. Imperdiet
                proin fermentum leo vel orci porta non pulvinar neque.
              </p>
            </Col>
            <Col md={4} className="secondsection_col mb-5">
              <h4 className="secondsection_submenu">RECENT NEWS</h4>

              <div className="mb-3">
                <Row>
                  <Col md={3}>
                    <div className="date_div">
                      <h1>27</h1>
                      <h6 className="pb-2 date">MAY</h6>
                    </div>
                  </Col>
                  <Col md={9}>
                    <h6>Lorem ipsum consectetur</h6>
                    <p>
                      Amet purus gravida quis blandit turpis cursus. Scelerisque
                      eleifend donec.
                    </p>
                  </Col>
                </Row>
              </div>

              <div className="mb-3">
                <Row>
                  <Col md={3}>
                    <div className="date_div">
                      <h1>14</h1>
                      <h6 className="pb-2 date">FEB</h6>
                    </div>
                  </Col>
                  <Col md={9}>
                    <h6>Lorem ipsum consectetur</h6>
                    <p>
                      Amet purus gravida quis blandit turpis cursus. Scelerisque
                      eleifend donec.
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col md={3}>
                    <div className="date_div">
                      <h1>05</h1>
                      <h6 className="pb-2 date">MAR</h6>
                    </div>
                  </Col>
                  <Col md={9}>
                    <h6>Lorem ipsum consectetur</h6>
                    <p>
                      Amet purus gravida quis blandit turpis cursus. Scelerisque
                      eleifend donec.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3} className="mb-5">
              <h4 className="secondsection_submenu">OUR SERVICES</h4>
              <div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Lorem ipsum dolor</Accordion.Header>
                    <Accordion.Body className="accord">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <Row>
                <Col md={4}>
                  <img src="Images/mv2.jpg" alt="" className="img-fluid" />
                </Col>
                <Col md={8} className="secondsection_sidemenu">
                  <h6>Lorem consec</h6>
                  <p>Amet purus gravida quis blandit turpis cursus.</p>
                </Col>
              </Row>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Lorem ipsum dolor</Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Lorem ipsum dolor</Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Lorem ipsum dolor</Accordion.Header>
                  <Accordion.Body className="accord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default SecondSection;
