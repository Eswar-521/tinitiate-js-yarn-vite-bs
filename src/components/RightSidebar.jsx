import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <div
      className="d-flex flex-column justify-content-start"
      style={{
        height: "200vh",
        background: "linear-gradient(to bottom,rgb(35, 174, 192),rgb(207, 125, 188))",
        padding: "20px",
        borderLeft: "2px solid #00796b",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
      }}
    >
      <h5
        className="text-center mb-4"
        style={{
          color: "#004d40",
          fontWeight: "bold",
          letterSpacing: "0.5px",
        }}
      >
        🌐 Quick Links
      </h5>

      <ListGroup variant="flush">
        {[
          { path: "/notifications", label: "🔔 Notifications", color: "#ffa726" },
          { path: "/messages", label: "💬 Messages", color: "#29b6f6" },
          { path: "/settings", label: "⚙️ Settings", color: "#66bb6a" },
          { path: "/support", label: "🆘 Support", color: "#ef5350" },
        ].map((item, idx) => (
          <ListGroup.Item
            key={idx}
            className="border-0 px-0 py-2"
            style={{ background: "transparent" }}
          >
            <Link
              to={item.path}
              className="text-decoration-none d-block"
              style={{
                color: item.color,
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0, 121, 107, 0.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {item.label}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RightSidebar;
