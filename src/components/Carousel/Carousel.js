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
          src: "https://i.ibb.co/cbkbLmQ/EMPLOYEE-DIR.png",
          link: "https://jacob-emp-dir.herokuapp.com/",
          gitHubLink: "https://github.com/jawalton6616/employee-directory",
          selected: false,
        },
        {
          id: 1,
          title: "Fitness Tracker",
          subTitle: "Keep track of your cardio and resistance exercises!",
          src: "https://i.ibb.co/pWCpn1q/FITNESS-TRACKER.png",
          link: "https://gentle-badlands-81439.herokuapp.com/",
          gitHubLink: "https://github.com/jawalton6616/workout-tracker",
          selected: false,
        },
        {
          id: 2,
          title: "Note Taker",
          subTitle:
            "Note taker for grocery lists, todo lists, or anything you want.",
          src: "https://i.ibb.co/nRrsYWM/NOTE-TAKER.png",
          link: "https://vast-journey-82352.herokuapp.com/",
          gitHubLink: "https://github.com/jawalton6616/note-taker",
          selected: false,
        },
        {
          id: 3,
          title: "Covid Tracker",
          subTitle: "Keep track of all the latest COVID numbers",
          //replace img below
          src: "https://i.ibb.co/gVRWbXD/COVID-TRACKER.png",
          link: "https://covid-tracker-79a3b.web.app/",
          gitHubLink: "https://github.com/jawalton6616/covid-tracker",
          selected: false,
        },
        {
          id: 4,
          title: "React News App",
          subTitle: "Follow all the latest news stories",
          //replace img below
          src: "https://i.ibb.co/mFTVRr0/NEWS-APP.png",
          link: "https://news-app-dun.vercel.app/",
          gitHubLink: "https://github.com/jawalton6616/news-app",
          selected: false,
        },

        {
          id: 5,
          title: "Weather Dashboard",
          subTitle:
            "Find out the weather and 5 day forecast of any city imaginable",
          //replace img below
          src: "https://i.ibb.co/QYF7D9M/WEATHER-DASH.png",
          link: "https://jawalton6616.github.io/weather-dashboard/",
          gitHubLink: "https://github.com/jawalton6616/weather-dashboard",
          selected: false,
        },
        {
          id: 6,
          title: "README Generator",
          subTitle: "Because making README's are never fun",
          //replace img below
          src: "https://i.ibb.co/pZPJJ0g/README-GEN.png",
          link: "https://github.com/jawalton6616/readme-generator",
          gitHubLink: "https://github.com/jawalton6616/readme-generator",
          selected: false,
        },
        {
          id: 7,
          title: "Country Info App",
          subTitle: "Easily find and view country information",
          //replace img below
          src: "https://i.ibb.co/xM1mB5x/COUNTRY-INFO.png",
          link: "https://country-info-app.vercel.app/",
          gitHubLink: "https://github.com/jawalton6616/country-info-app",
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
