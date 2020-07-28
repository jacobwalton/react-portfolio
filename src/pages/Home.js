import React from "react";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
// import Footer from "../components/Footer/Footer";

function Home(props) {
  return (
    <div>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
