import React from "react";
// import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./carousel.css";
import Card from "../Card/Card";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "project name0",
          subTitle: "brief description0",
          src: "https://via.placeholder.com/150x150",
          link: "link to project0",
          selected: false,
        },
        {
          id: 1,
          title: "project name1",
          subTitle: "brief description1",
          src: "https://via.placeholder.com/150x150",
          link: "link to project1",
          selected: false,
        },
        {
          id: 2,
          title: "project name2",
          subTitle: "brief description2",
          src: "https://via.placeholder.com/150x150",
          link: "link to project2",
          selected: false,
        },
        {
          id: 3,
          title: "project name3",
          subTitle: "brief description3",
          src: "src-to-img3",
          link: "link to project3",
          selected: false,
        },
      ],
    };
  }

  handleHover = (id, card) => {
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
          onClick={(event) => this.handleHover(item.id, event)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return <p>Carousel works!</p>;
  }
}

export default Carousel;
