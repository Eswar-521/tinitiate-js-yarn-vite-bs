import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const Comparison = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("comparedItems")) || [];
    setItems(data);
  }, []);

  const clearComparison = () => {
    localStorage.removeItem("comparedItems");
    setItems([]);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Comparison Table</h2>
      {items.length === 0 ? (
        <p className="text-center">No items selected for comparison.</p>
      ) : (
        <>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (
              <Col key={item.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={item.image} style={{ height: "180px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger" onClick={clearComparison}>
              Clear Comparison
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Comparison;
