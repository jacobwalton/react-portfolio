import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./content.css";

function Content(props) {
  return (
    <Container fluid={true} minHeight className="content">
      <Row className="justify-content-center ">
        <Col
          md={10}
          sm={8}
          className="text-center bg-light p-5 content-text content"
        >
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}
export default Content;
