import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba yellow b--yellow bg-black"
        type="search"
        placeholder="Search for a game..."
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
