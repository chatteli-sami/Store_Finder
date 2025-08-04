
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
    const nav = useNavigate();
    const handleNavigation = () => {
        nav('/home');
    }
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">StoreFinder</a>
        <div>
          <button className="btn btn-outline-light me-2">Login</button>
          <button className="btn btn-warning text-dark">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center bg-light py-5">
        <h1 className="display-4 fw-bold text-primary">Find stores near you</h1>
        <p className="lead text-muted mt-3">
          Discover shops, markets, and services around your location effortlessly.
        </p>
        <div className="mt-4">
          <button className="btn btn-primary btn-lg me-3" onClick={handleNavigation}>Start Exploring</button>
          <button className="btn btn-outline-secondary btn-lg">Learn More</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container py-5 text-center">
        <h2 className="mb-4 text-dark">Why StoreFinder?</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>🔍 Smart Search</h5>
            <p>Quickly locate stores with keywords and filters.</p>
          </div>
          <div className="col-md-4">
            <h5>📍 Location-Based</h5>
            <p>Find nearby places automatically using geolocation.</p>
          </div>
          <div className="col-md-4">
            <h5>🧭 Easy Navigation</h5>
            <p>Get directions and map integration right out of the box.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>&copy; 2025 StoreFinder. Crafted by Chatteli.</small>
      </footer>
    </div>
  );
};

export default Landing;
