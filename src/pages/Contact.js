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
        <ul className="mt-5">
          <li>
            <a
              href="https://github.com/jawalton6616?tab=repositories"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <br />
          <li>
            <a
              href="https://www.linkedin.com/in/jacob-walton-b7b3911a2/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </Content>
    </animated.div>
  );
}

export default Contact;
