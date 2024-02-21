import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for styling


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  const handleSearch = () => {
    onSearch(query);
  };


  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="What do you want to listen"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};


export default SearchBar;
