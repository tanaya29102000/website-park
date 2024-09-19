import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <Link to="/contact" className="contact">Search</Link> {/* Navigate to Contact page */}
    </div>
  );
};

export default Search;
