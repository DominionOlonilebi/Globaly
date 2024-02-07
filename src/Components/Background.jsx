import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Background = () => {
  return (
    <div>
      <Container fluid className="background_container">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={4}>
              <h1>
                SOLUTIONS <br /> YOU NEED ASAP!
              </h1>
            </Col>
            <Col md={7}>
              <img src="Images/mv10.png" alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Background;
