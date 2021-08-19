/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const About = () => {
  return (
    <div style={{ width: "50%", margin: "50px auto" }}>
      <Card>
        <Card.Header as="h5">
          <Nav.Link
            style={{ color: "black" }}
            target="_blank"
            href="https://github.com/mh-saeed"
          >
            <strong>Build By: </strong>
            <span style={{ color: "blue" }}> mh-saeed</span>
          </Nav.Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <strong>Description</strong>{" "}
          </Card.Title>
          <Card.Text>
            This Project is created to learn React-Router-Dom and
            React-Bootstrap.
            <br /> Learn React-Router-Dom from{" "}
            <strong>Official Documentation </strong>
            <a target="_blank" href="https://reactrouter.com/">
              Link
            </a>{" "}
            |<strong> FreeCodeCamp </strong>{" "}
            <a
              target="_blank"
              href="https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/"
            >
              Link
            </a>
            <br />
            Learn React-Bootstrap from <strong>
              Official Documentation{" "}
            </strong>{" "}
            <a target="_blank" href="https://react-bootstrap.netlify.app/">
              Link
            </a>
          </Card.Text>
          <a target="_blank" href="https://github.com/mh-saeed">
            <Button variant="primary">Source Code</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
