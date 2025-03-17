import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="p-3" style={{ height: "100vh", backgroundColor: "transparent", border: "none" }}>
      <h5 className="text-center">Navigation</h5>
      <ListGroup variant="flush"> {/* Removes background & borders */}
        <ListGroup.Item className="border-0">
          <Link to="/" className="text-decoration-none text-dark">🏠 Home</Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Link to="/services" className="text-decoration-none text-dark">🛠 Services</Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Link to="/profile" className="text-decoration-none text-dark">👤 Profile</Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Link to="/contact" className="text-decoration-none text-dark">📞 Contact</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default LeftSidebar;
