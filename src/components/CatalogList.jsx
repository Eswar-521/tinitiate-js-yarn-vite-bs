// src/components/Catalog/CatalogList.jsx
import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const CatalogList = ({ data }) => {
  return (
    <ListGroup className="mt-3">
      {data.map((item) => (
        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
          <div>
            <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
            {item.name} - ${item.price}
          </div>
          <Button variant="primary">Buy Now</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CatalogList;
