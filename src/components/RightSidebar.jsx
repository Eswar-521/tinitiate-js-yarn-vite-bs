import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <div className="p-3" style={{ height: "100vh", backgroundColor: "transparent", border: "none" }}>
      <h5 className="text-center">Account</h5>
      <ListGroup variant="flush"> {/* Removes background & borders */}
        <ListGroup.Item className="border-0">
          <Link to="/login" className="text-decoration-none text-dark">🔑 Login</Link>
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Link to="/signup" className="text-decoration-none text-dark">📝 Signup</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSidebar;
