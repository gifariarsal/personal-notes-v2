import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ title, changeTitle }) => {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari judul catatan ..."
        value={title}
        onChange={(e) => changeTitle(e.target.value)}
      />
    </section>
  );
};

SearchBar.propTypes = {
  title: PropTypes.string,
  changeTitle: PropTypes.func.isRequired,
};

export default SearchBar;
