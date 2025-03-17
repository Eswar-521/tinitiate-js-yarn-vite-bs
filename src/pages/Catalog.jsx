import React from "react";
import { Container } from "react-bootstrap";
import CatalogCards from "../components/CatalogCards";
import catalogData from "../assets/catalogData.js"; 

const Catalog = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Catalog Page</h2>
      <CatalogCards items={catalogData} />
    </Container>
  );
};

export default Catalog;
