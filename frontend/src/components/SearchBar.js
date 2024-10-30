import React from "react";

function SearchBar({ handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)} // Call handleSearch on input change
      className="w-[400px] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
    />
  );
}

export default SearchBar;
