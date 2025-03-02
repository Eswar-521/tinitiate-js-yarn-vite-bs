import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

const Header = ({ onSearch, onMenuToggle }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => { 
    e.preventDefault();
    onSearch(search);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
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
          {/* Hidden Menu Button Beside Search Button */}
          <Button variant="outline-light" onClick={onMenuToggle}>
            <FaBars />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
