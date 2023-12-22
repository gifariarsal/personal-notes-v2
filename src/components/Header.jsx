import React from "react";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme";
import ToggleLocale from "./ToggleLocale";
import { LocaleConsumer } from "../contexts/LocaleContext";

const Header = ({ logout, name }) => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <header>
            <h1>
              <Link to="/">Thothes</Link>
            </h1>
            {name && (
              <nav className="navigation">
                <ul>
                  <li>
                    <Link to="/">{locale === "id" ? "Beranda" : "Home"}</Link>
                  </li>
                  <li>
                    <Link to="/archives">
                      {locale === "id" ? "Arsip" : "Archive"}
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            <ToggleLocale />
            <ToggleTheme />
            {name && (
              <button
                className="button-logout"
                onClick={logout}
                type="button"
                aria-label="Logout"
                title="Logout"
              >
                <IoLogOutOutline />
                {name}
              </button>
            )}
          </header>
        );
      }}
    </LocaleConsumer>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Header;
