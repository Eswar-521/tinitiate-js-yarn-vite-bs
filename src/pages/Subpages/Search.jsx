import React from "react";

const Search = () => (
  <div className="container mt-4">
    <h2>🔍 Search</h2>
    <form className="mt-3">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
        />
      </div>
      <button className="btn btn-primary">Search</button>
    </form>
  </div>
);

export default Search;
