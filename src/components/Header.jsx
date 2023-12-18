import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Thothes</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
