import React from "react";
import { useSpring, animated } from "react-spring";
import Hero from "../components/Hero/Hero";

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="port-info" style={style}>
      <Hero title={props.title} />
    </animated.div>
  );
}

export default About;
