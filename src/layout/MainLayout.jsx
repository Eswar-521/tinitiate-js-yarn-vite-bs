import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      {/* Header */}
      <Row>
        <Col className="p-0">
          <Header />
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="flex-grow-1">
        {/* Left Sidebar */}
        <Col
          md={3}
          className="d-flex flex-column"
          style={{ minHeight: "100vh", backgroundColor: "transparent", borderRight: "none" }}
        >
          <LeftSidebar />
        </Col>

        {/* Main Content Area */}
        <Col md={6} className="p-3">
          {children}
        </Col>

        {/* Right Sidebar */}
        <Col
          md={3}
          className="p-3 d-flex flex-column"
          style={{ backgroundColor: "transparent", borderLeft: "none" }}
        >
          <RightSidebar />
        </Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col className="p-0">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
