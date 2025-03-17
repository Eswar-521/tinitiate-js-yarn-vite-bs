// src/components/Catalog/CatalogGrid.jsx
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CatalogGrid = ({ data }) => {
  return (
    <Row className="mt-3">
      {data.map((item) => (
        <Col key={item.id} md={4} sm={6} xs={12} className="mb-3">
          <Card>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CatalogGrid;
