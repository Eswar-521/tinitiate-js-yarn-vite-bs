// src/pages/Home.jsx
import React, { useState } from "react";
import CatalogGrid from "../components/CatalogGrid";
import CatalogList from "../components/CatalogList";
import CatalogCards from "../components/CatalogCards";
import FilterSort from "../components/FilterSort";

const products = [
  { id: 1, name: "Product 1", price: 99, image: "/assets/product1.jpg", description: "Best quality!" },
  { id: 2, name: "Product 2", price: 199, image: "/assets/product2.jpg", description: "Limited offer!" },
  { id: 3, name: "Product 3", price: 299, image: "/assets/product3.jpg", description: "Best seller!" }
];

const Home = () => {
  const [view, setView] = useState("grid");
  const [filteredData, setFilteredData] = useState(products);

  return (
    <div className="container">
      <h1 className="text-center mt-3">Welcome to Our Catalog</h1>
      <FilterSort setFilteredData={setFilteredData} setView={setView} data={products} />
      {view === "grid" && <CatalogGrid data={filteredData} />}
      {view === "list" && <CatalogList data={filteredData} />}
      {view === "cards" && <CatalogCards data={filteredData} />}
    </div>
  );
};

export default Home;
