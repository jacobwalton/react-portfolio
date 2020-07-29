import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import { useSpring, animated } from "react-spring";

function Home(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={style}>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </animated.div>
  );
}

export default Home;
