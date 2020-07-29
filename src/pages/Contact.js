import React from "react";
import { useSpring, animated } from "react-spring";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";

function Contact(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={style}>
      <Hero title={props.title} />
      <Content className="mt-0 pt-0  text-center">
        <strong>
          View my links below or email me at
          <a href="mailto:jawalton6616@gmail.com">
            <mark>jawalton6616@gmail.com</mark>
          </a>
        </strong>
        <ul>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </Content>
    </animated.div>
  );
}

export default Contact;
