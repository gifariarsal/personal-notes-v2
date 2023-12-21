import React from "react";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

const Header = ({ logout, name }) => {
  return (
    <header>
      <h1>
        <Link to="/">Thothes</Link>
      </h1>
      {name && (
        <>
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
          <button className="button-logout" onClick={logout}>
            <IoLogOutOutline />{name}
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
