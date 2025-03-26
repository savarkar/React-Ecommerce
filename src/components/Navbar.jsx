import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "./SearchContext"; // Import SearchContext

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          React Ecommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <div className="position-relative">
              <input
                type="text"
                className="form-control me-2 rounded-pill px-3"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                style={{ width: "180px" }}
              />
              <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-dark" />
            </div>
          </div>
          <NavLink to="/cart" className="btn btn-outline-dark m-2">
            <i className="fa fa-cart-shopping mr-1"></i> Cart{" "}
            {state.length > 0 ? `(${state.length})` : ""}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
