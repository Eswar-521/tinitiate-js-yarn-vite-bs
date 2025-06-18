import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", label: "🏠 Home" },
  { path: "/about", label: "ℹ️ About" },
  { path: "/services", label: "🛠 Services" },
  { path: "/catalog", label: "📚 Catalog" },
  { path: "/dashboard", label: "📊 Dashboard" },
  { path: "/analytics", label: "📈 Analytics" },
  { path: "/security", label: "🔒 Security" },
  { path: "/profile", label: "👤 Profile" },
  { path: "/contact", label: "📞 Contact" },
  { path: "/comparison", label: " Comparison" },
  
];

const LeftSidebar = () => {
  return (
    <div
      className="p-3"
      style={{
        height: "100vh",
        backgroundColor: "#336699",
        color: "white",
        paddingTop: "0",
      }}
    >
      <h5 className="text-center mb-4">📌 Navigation</h5>
      <div className="d-flex flex-column gap-2">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-decoration-none text-white py-2 px-3 rounded"
            style={{
              backgroundColor: "#336699",
              transition: "background-color 0.3s ease",
              borderRadius: "8px",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#264d73")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#336699")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
