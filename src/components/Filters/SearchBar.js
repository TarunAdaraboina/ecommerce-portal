import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container">
      <label htmlFor="search-input" className="search-label">Search Products:</label>
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
