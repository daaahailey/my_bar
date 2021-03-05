import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
      <div className="nav_container">
        <Link to="/" className="nav_menus">
          Home
        </Link>
        <Link to="/recipes" className="nav_menus">
          Recipes
        </Link>
        <Link to="/about" className="nav_menus">
          About
        </Link>
      </div>
    );
}

export default Navigation;