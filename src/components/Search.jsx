import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

function Search({ updateSearchResult }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleChange = (e) => setSearch(e.target.value);

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
                type="button"
                onClick={() => updateSearchResult(search, type)}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          {['all', 'movie', 'series'].map((t) => (
              <RadioInput
                  key={t}
                  id={t}
                  type={t}
                  handleFilterChange={handleFilterChange}
                  checked={type === t}
              />
          ))}
        </div>
      </div>
  );
}

Search.propTypes = {
  updateSearchResult: PropTypes.func.isRequired,
};

export default Search;
