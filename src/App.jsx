import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Context and Utility Components
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTopButton from "./components/ScrollToTopButton";

// ✅ Layout
import MainLayout from "./layout/MainLayout";

// ✅ Core Pages
import Home from "./pages/Main/Home";
import About from "./pages/Subpages/About";
import Contact from "./pages/Subpages/Contact";
import Services from "./pages/Subpages/Services";
import Login from "./pages/Subpages/Login";
import Signup from "./pages/Subpages/Signup";
import Catalog from "./pages/Subpages/Catalog";
import Profile from "./pages/Subpages/Profile";

import Dashboard from "./pages/Subpages/Dashboard";
import Analytics from "./pages/Subpages/Analytics";
import Security from "./pages/Subpages/Security";
import Comparison from "./pages/Subpages/comparison";

// ✅ Extra Pages
import About1 from "./pages/ExtraPages/About1";
import Services1 from "./pages/ExtraPages/Services1";
import Contact1 from "./pages/ExtraPages/Contact1";
import Help from "./pages/ExtraPages/Help";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <ScrollToTopButton />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/security" element={<Security />} />
            <Route path="/comparison" element={<Comparison />} />

            <Route path="/about1" element={<About1 />} />
            <Route path="/contact1" element={<Contact1 />} />
            <Route path="/help" element={<Help />} />
            <Route path="/services1" element={<Services1 />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
