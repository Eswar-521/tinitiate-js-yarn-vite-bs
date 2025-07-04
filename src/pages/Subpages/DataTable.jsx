import React from "react";

const DataTable = () => (
  <div className="container mt-4">
    <h2>📋 Data Table</h2>
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>John</td><td>john@example.com</td></tr>
        <tr><td>2</td><td>Jane</td><td>jane@example.com</td></tr>
      </tbody>
    </table>
  </div>
);

export default DataTable;
