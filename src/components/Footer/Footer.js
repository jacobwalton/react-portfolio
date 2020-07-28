import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Footer className="mt-5 footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Footer Text
          </Col>
          <Col className="p-0 d-flex justify-content-end muted" md={3}>
            Created using React
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}
export default Footer;
