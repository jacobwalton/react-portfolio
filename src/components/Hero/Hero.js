import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder text-center">
                {props.title}
              </h1>
            )}
            {props.title && (
              <h2 className="display-4 font-weight-light text-center">
                {props.subtitle}
              </h2>
            )}
            {props.title && (
              <p className="lead font-weight-light text-center">{props.text}</p>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
