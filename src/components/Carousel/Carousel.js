import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./carousel.css";
import Card from "../Card/Card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Employee Directory",
          subTitle:
            "Easily keep track of your employees by utilizing a search bar and the ability to sort by name!",
          src: "https://im6.ezgif.com/tmp/ezgif-6-c1f186baae05.gif",
          link: "https://jacob-emp-dir.herokuapp.com/",
          gitHubLink: "https://github.com/jawalton6616/employee-directory",
          selected: false,
        },
        {
          id: 1,
          title: "Fitness Tracker",
          subTitle: "Keep track of your cardio and resistance exercises!",
          src: "https://im6.ezgif.com/tmp/ezgif-6-76f0e3eb9920.gif",
          link: "https://gentle-badlands-81439.herokuapp.com/",
          gitHubLink: "https://github.com/jawalton6616/workout-tracker",
          selected: false,
        },
        {
          id: 2,
          title: "Note Taker",
          subTitle:
            "Note taker for grocery lists, todo lists, or anything you want.",
          src: "https://im6.ezgif.com/tmp/ezgif-6-0e412c383ff1.gif",
          link: "https://vast-journey-82352.herokuapp.com/",
          gitHubLink: "https://github.com/jawalton6616/note-taker",
          selected: false,
        },
        {
          id: 3,
          title: "Simpsons Quote Trivia",
          subTitle: "Test how well you know your Simpsons quotes!",
          src: "https://im6.ezgif.com/tmp/ezgif-6-f847f2d0b23d.gif",
          link: "https://jawalton6616.github.io/simpsons-quote-trivia/",
          gitHubLink: "https://github.com/jawalton6616/simpsons-quote-trivia",
          selected: false,
        },
      ],
    };
  }

  onClick = (id, card) => {
    const items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  printItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(event) => this.onClick(item.id, event)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.printItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
