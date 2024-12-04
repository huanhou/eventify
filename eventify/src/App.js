import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path based on your file structure
import Home from "./pages/Home"; // Create a Home page or component
import EventListing from "./pages/EventListing"; // Create an Events page or component
import About from "./pages/About"; // Create an About page or component
import Contact from "./pages/Contact"; // Contact Page
import AuthPage from "./pages/AuthPage"; // Combined Login/Register page
import Profile from "./pages/Profile"; // Profile page (to be built)
import { UserProvider } from "./context/UserContext"; // Context for user management
import Footer from "./components/Footer";
import EventDetails from "./pages/EventDetails";
const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventListing />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
