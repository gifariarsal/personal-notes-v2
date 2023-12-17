import React from "react";

class SearchBar extends React.Component {

    render() {
        return (
            <section className="search-bar">
                <input type="text" placeholder="Cari judul catatan..." />
            </section>
        )
    }
}

export default SearchBar