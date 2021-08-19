import React from "react";
import shoes from "../../data";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Container style={{ padding: "0" }}>
      <Row
        xs="1"
        sm="2"
        md="3"
        lg="auto"
        xl="auto"
        xxl="auto"
        className="justify-content-md-center"
      >
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Col key={slug} style={{ margin: "10px" }}>
            <Card style={{ width: "16rem", maxHeight: "440px" }}>
              <Card.Img variant="top" src={img} height="250px" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title.
                </Card.Text>
                <Link to={`/products/${slug}`}>
                  <Button variant="primary">View Product</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
