import React from "react";

const Forms = () => (
  <div className="container mt-4">
    <h2>📝 Forms</h2>
    <form className="mt-3">
      <div className="mb-3">
        <label>Name</label>
        <input className="form-control" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" placeholder="Email" />
      </div>
      <div className="mb-3">
        <label>Message</label>
        <textarea className="form-control" placeholder="Message"></textarea>
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  </div>
);

export default Forms;
