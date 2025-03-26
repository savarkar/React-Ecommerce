import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()} React E-commerce. All rights reserved.</p>
        <div>
          <Link className="text-white me-3" to="/about">About Us</Link>
          <Link className="text-white me-3" to="/contact">Contact</Link>
          <Link className="text-white" to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
