import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeConsumer } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button
            className="toggle-theme"
            onClick={toggleTheme}
            type="button"
            aria-label="Ganti tema"
            title="Ganti tema"
          >
            {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
};

export default ToggleTheme;
