import React from "react";
import { useSpring, animated } from "react-spring";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="port-info" style={style}>
      <Hero title={props.title} />
      <Content className="px-4">
        My name is Jacob and I am a 22 year old student from Kansas City. I have
        2 crazy dogs, and my passion is music. I currently work in Overland
        Park, KS as a government contractor. My favorite color is purple and I
        don't know what else to type here.
      </Content>
    </animated.div>
  );
}

export default About;
