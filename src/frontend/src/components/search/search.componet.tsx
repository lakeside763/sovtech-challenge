import React, { useState, useCallback, useContext } from 'react';
import { StarsWarContext } from '../../context/stars-wars.contex';
import './search.styles.scss';


const Search = () => {
  const { getPeopleListBySearch } = useContext(StarsWarContext);
  const [search, setSearch] = useState('');

  const handleFormSearch = (event: any) => {
    event.preventDefault();
    getPeopleListBySearch(search);
  }

  const handleSearchChange = useCallback((event: any) => {
    event.preventDefault();
    setSearch(event.target.value)
  }, []);

  return (
    <div className="search-wrapper">
      <form onSubmit={handleFormSearch}>
        <div className="search-form">
          <input type='text' name='search' 
            placeholder='Search for your stars' 
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search;