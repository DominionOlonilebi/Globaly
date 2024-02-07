import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Quote = () => {
  return (
    <div>
      <Container fluid className="quote_container">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <Col md={7}>
              <Carousel slide>
                <Carousel.Item>
                  <div className="card-fluid py-2">
                    <h6 className="testify_text">
                      Habitant morbi tristique senectus et netus...
                    </h6>
                    <h5 className="">
                      <strong>Dave Rech</strong>
                    </h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card-fluid py-2">
                    <h6 className="testify_text">
                      Accumsan in nisl nisi scelerisque eu...
                    </h6>
                    <h5 className="">
                      <strong>Jack Smith</strong>
                    </h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="card-fluid py-2">
                    <h6 className="testify_text">
                      Malesuada turpis egestas sed tempus..
                    </h6>
                    <h5 className="">
                      <strong>Kenneth Cloff</strong>
                    </h5>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Quote;
