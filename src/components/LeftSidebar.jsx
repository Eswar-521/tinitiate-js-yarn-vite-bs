import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div 
      className="p-3" 
      style={{ 
        height: "100vh", 
        backgroundColor: "#336699",  // Lighter shade of blue
        border: "none", 
        color: "white",  // White text for visibility
        paddingTop: "0", 
      }}
    >
      <h5 className="text-center text-white">Navigation</h5>
      <div className="d-flex flex-column gap-2">
        <Link 
          to="/" 
          className="text-decoration-none text-white py-2 px-3 rounded hover-bg-dark"
          style={{ 
            backgroundColor: "#336699",  // Lighter blue background
            transition: "background-color 0.3s ease",
            borderRadius: "8px",
          }}
        >
          🏠 Home
        </Link>
        <Link 
          to="/services" 
          className="text-decoration-none text-white py-2 px-3 rounded hover-bg-dark"
          style={{ 
            backgroundColor: "#336699", 
            transition: "background-color 0.3s ease",
            borderRadius: "8px",
          }}
        >
          🛠 Services
        </Link>
        <Link 
          to="/profile" 
          className="text-decoration-none text-white py-2 px-3 rounded hover-bg-dark"
          style={{ 
            backgroundColor: "#336699", 
            transition: "background-color 0.3s ease",
            borderRadius: "8px",
          }}
        >
          👤 Profile
        </Link>
        <Link 
          to="/contact" 
          className="text-decoration-none text-white py-2 px-3 rounded hover-bg-dark"
          style={{ 
            backgroundColor: "#336699", 
            transition: "background-color 0.3s ease",
            borderRadius: "8px",
          }}
        >
          📞 Contact
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
