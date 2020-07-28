import React from "react";
import { useSpring, animated } from "react-spring";
// import { Jumbotron, Container, Row, Col } from "./node_modules/react-bootstrap";

function CardCaption(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="port-info" style={style}>
      <p className="port-title">{props.title}</p>
      <p className="port-info">{props.subTitle}</p>
      <div>
        <a
          className="port-info"
          href={props.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub!
        </a>
        <br />
        <a
          className="port-info"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View!
        </a>
        <br />
      </div>
    </animated.div>
  );
}

export default CardCaption;
