import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";

function Home(props) {
  return (
    <div>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default Home;
