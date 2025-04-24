import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <div 
      className="p-3" 
      style={{ 
        height: "100vh", 
        backgroundColor: "#e0f7fa", // Light cyan (aqua shade)
        border: "none",
        borderRadius: "5px",
        marginTop: "-15px", // Removes the gap between the header and sidebar
        paddingTop: "10", // Removes top padding
      }}
    >
      <h5 className="text-center" style={{ color: "#00796b" }}>Account</h5> {/* Dark teal for contrast */}
      <ListGroup variant="flush">
        <ListGroup.Item className="border-0">
          <Link to="/login" className="text-decoration-none" style={{ color: "#007bff" }}>🔑 Login</Link> {/* Blue color */}
        </ListGroup.Item>
        <ListGroup.Item className="border-0">
          <Link to="/signup" className="text-decoration-none" style={{ color: "#00796b" }}>📝 Signup</Link> {/* Dark teal color */}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSidebar;
