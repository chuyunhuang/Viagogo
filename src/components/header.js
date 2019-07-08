import React from "react";
import "./style/header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <div className="home">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Yungogo
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          By Location
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/bestdeals"
          style={{ textDecoration: "none", color: "black" }}
        >
          Best Deals
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/allshows" style={{ textDecoration: "none", color: "black" }}>
          All Shows
        </Link>
      </div>
    </div>
  );
};

export default Header;
