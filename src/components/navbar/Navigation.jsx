import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import styles from "./navigation.module.css";
const Navigation = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <LinkContainer to="/">
            <Navbar.Brand className={styles.Brand}>Shoe Store</Navbar.Brand>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link className={styles.links}>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/products">
                <Nav.Link className={styles.links}>Products</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/about">
                <Nav.Link className={styles.links}>About</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item >
              <Nav.Link
                className={styles.sourceCode}
                target="_blank"
                href="https://github.com/mh-saeed"
              >
                Source Code
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
