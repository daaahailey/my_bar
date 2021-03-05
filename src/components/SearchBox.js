import React from "react";
import "./SearchBox.css"

const SearchBox = ({ searchfield, searchChange }) => {
    return (
      <div className="search_div">
        <input
        className="search_field"
        type="search"
        placeholder="Search Cocktail"
        onChange={searchChange}/>
      </div>
    );
}

export default SearchBox;