import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

function Footer() {
  return (
    <footer id="sticky-footer">
      <Container fluid={true}>
        <Row className="border-top p-3 bg-light">
          <Col className="p-0 text-center">
            Jacob Walton <br />
            Created using React
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
