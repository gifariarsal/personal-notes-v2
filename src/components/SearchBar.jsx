import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

const SearchBar = ({ title, changeTitle }) => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="search-bar">
            <input
              type="text"
              placeholder={
                locale === "id"
                  ? "Cari judul catatan ..."
                  : "Search note title ..."
              }
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
          </section>
        );
      }}
    </LocaleConsumer>
  );
};

SearchBar.propTypes = {
  title: PropTypes.string,
  changeTitle: PropTypes.func.isRequired,
};

export default SearchBar;
