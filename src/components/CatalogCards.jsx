import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CatalogCards = ({ items = [] }) => {  // ✅ Default empty array to prevent undefined
  return (
    <Row>
      {items.length > 0 ? (
        items.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-center">No products available</p>
      )}
    </Row>
  );
};

export default CatalogCards;
