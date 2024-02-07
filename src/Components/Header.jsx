import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaGift, FaNetworkWired } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container fluid className="globaly_container">
        <Row>
          <Col md={4}>
            <h2 className="mx-2">
              <FaGift className="fagift rounded-circle" /> <span>Globaly</span>
            </h2>
            <h6 className="mx-4">BUSINESS THEME</h6>
          </Col>
        </Row>

        <Navbar expand="lg" className="navbarss">
          <Container fluid className="navbars">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                <Nav.Link href="/" className=" linkss px-5 py-3">
                  HOME
                </Nav.Link>

                <Nav.Link href="#about" className=" links px-5 py-3">
                  ABOUT US
                </Nav.Link>
                <Nav.Link href="#solutions" className=" links px-5 py-3">
                  SOLUTIONS
                </Nav.Link>
                <Nav.Link href="#services" className=" links px-5 py-3">
                  SERVICES
                </Nav.Link>
                <Nav.Link href="#blog" className=" links px-5 py-3">
                  BLOG
                </Nav.Link>
                <Nav.Link href="#contacts" className=" links px-5 py-3">
                  CONTACTS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
