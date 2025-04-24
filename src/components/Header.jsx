import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import image from "../assets/image.png"; // Adjusted image import path

const Header = ({ onSearch, onMenuToggle }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <header className="p-4 shadow-lg" style={{
      background: "linear-gradient(45deg, #ff7f50 10%, #32cd32 50%, #1e90ff 90%, black)" // Gradient background
    }}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Side - Logo Image */}
        <Navbar.Brand as={Link} to="/" className="text-light fw-bold d-flex align-items-center">
          <img
            src={image}  // Using the imported image here
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}  // Adjust the size as needed
          />
        </Navbar.Brand>

        {/* Centered Tech Stack */}
        <div className="d-flex gap-2 mx-auto">
          <span className="bg-warning text-dark px-3 py-1 rounded fw-semibold">JS</span>
          <span className="bg-secondary text-white px-3 py-1 rounded fw-semibold">Yarn</span>
          <span className="bg-danger text-white px-3 py-1 rounded fw-semibold">Vite</span>
          <span className="bg-info text-dark px-3 py-1 rounded fw-semibold">Bs</span>
        </div>

        {/* Right Side - Search Bar, Menu Button, and Login/Signup Buttons */}
        <div className="d-flex align-items-center gap-3 ms-auto">
          {/* Search Bar */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" variant="outline-light" className="me-2">
              <FaSearch />
            </Button>
          </Form>

          {/* Hidden Menu Button */}
          <Button variant="outline-light" onClick={onMenuToggle}>
            <FaBars />
          </Button>

          {/* Login / Signup Buttons */}
          <Nav className="d-flex gap-2">
            <Nav.Link as={Link} to="/login" className="btn btn-sm btn-light text-dark">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="btn btn-sm btn-outline-light text-dark">
              Sign Up
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
