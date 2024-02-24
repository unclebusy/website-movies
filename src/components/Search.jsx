import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const { updateSearchResult = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      updateSearchResult(search, type);
    }
  };

  const handleFilterChange = (e) => {
    setType(e.target.dataset.type);
    updateSearchResult(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          <button
            className="btn-search waves-effect waves-light btn"
            type="submit"
            onClick={() => updateSearchResult(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="all">
          <input
            className="with-gap"
            id="all"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilterChange}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label htmlFor="movie">
          <input
            className="with-gap"
            id="movie"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilterChange}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label htmlFor="series">
          <input
            className="with-gap"
            id="series"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilterChange}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}

Search.propTypes = {
  updateSearchResult: PropTypes.func.isRequired,
};

export default Search;
