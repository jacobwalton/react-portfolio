import React from "react";
import { useSpring, animated } from "react-spring";
import Hero from "../components/Hero/Hero";
import Content from "../components/Content/Content";
import { Card, Accordion, Button } from "react-bootstrap";

function About(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="port-info" style={style}>
      <Hero title={props.title} />
      <Content className="px-4">
        My name is Jacob Walton. I am a full stack web developer and recent
        graduate of KU's Coding Boot Camp. So far I've learned the popular
        "MERN" stack as well as some additional libraries, frameworks and
        technologies (listed below). Being self-taught in music production as
        well as graphic design, I believe always had a strong desire to learn
        and push myself. I've always had a passion for creating and learning,
        and I believe that there are no limits to how skilled of a developer I
        can become.
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                FRONT END
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>BootStrap</li>
                  <li>Bulma</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>AJAX & AXIOS</li>
                  <li>Material UI</li>
                  <li>React</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                BACK END
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Handlebars.js</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
                <br />
                <em>
                  *I also have experience with ORM, API's, & user
                  authentication.
                </em>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                DEV TOOLS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Heroku</li>
                  <li>Terminal</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Content>
    </animated.div>
  );
}

export default About;
