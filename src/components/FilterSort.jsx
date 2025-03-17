// src/components/Catalog/FilterSort.jsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FilterSort = ({ setFilteredData, setView, data }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <Form.Control
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch} variant="primary" className="mx-2">
        Search
      </Button>
      <Button variant="secondary" onClick={() => setView("grid")}>Grid View</Button>
      <Button variant="secondary" onClick={() => setView("list")}>List View</Button>
      <Button variant="secondary" onClick={() => setView("cards")}>Card View</Button>
    </div>
  );
};

export default FilterSort;
