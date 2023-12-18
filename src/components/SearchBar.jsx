import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.keyword || "",
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordChange(event) {
    const newKeyword = event.target.value;

    this.setState({
      keyword: newKeyword,
    });

    this.props.onSearch(newKeyword);
  }

  render() {
    return (
      <section className="search-bar">
        <input
          type="text"
          placeholder="Cari judul catatan..."
          value={this.state.keyword}
          onChange={this.handleKeywordChange}
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};

export default SearchBar;
