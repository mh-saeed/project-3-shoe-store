import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

import shoes from "../../data";

const ProductItem = () => {
  const { slug } = useParams();
  const shoe = shoes[slug];
  const { name, img } = shoe;
  return (
    <div style={{ width: "fit-content", margin: "10px auto" }}>
      {!shoe ? (
        <h1>Product is not available at the moment!</h1>
      ) : (
        <Card style={{ width: "16rem", maxHeight: "440px" }}>
          <Card.Img variant="top" src={img} height="250px" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ProductItem;
