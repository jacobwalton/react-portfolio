import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid pb-1">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            {props.title && (
              <h5 className="display-4 font-weight-bolder text-center">
                {props.title}
              </h5>
            )}
            {props.title && (
              <h5 className="font-weight-light text-center">
                {props.subtitle}
              </h5>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
