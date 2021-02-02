// react and style
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// components
import Footer from "./components/Footer/Footer.js";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jacob Walton",
      navLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Full Stack Web Developer",
        subtitle: "Take a look at a few of my projects below!",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact links",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0 " fluid={true}>
          <Navbar className="border-bottom bg-light" expand="lg">
            <Navbar.Brand>Jacob Walton</Navbar.Brand>
            {/* nav toggle links button*/}
            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            {/* controls toggle */}
            {/* add night mode btn here */}
            <Navbar.Collapse id="navbar-toggle">
              {/* nav links */}
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About me
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <About title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <Contact title={this.state.contact.title} />}
          />

          <Footer className="sticky-footer" />
        </Container>
      </Router>
    );
  }
}

export default App;
