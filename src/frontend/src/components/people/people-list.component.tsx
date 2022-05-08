import React, { Fragment, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import './people-list.style.scss';
import { StarsWarContext } from "../../context/stars-wars.contex";


const Loader = () => {
  return (
    <div style={{ color: '#fff', fontSize: '32px'}}>Loading...</div>
  )
}

const PeopleList = () => {
  const { 
    peopleList,
    count, 
    firstLetter, 
    loading, 
    getPeopleListBySearch
  } = useContext(StarsWarContext);

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
    <div className="outer-wrapper">
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
      {loading ? (
        <Loader />
      ): (
        <Fragment>
            <div className="count">Showing 10 of {count}</div>
            <div className="people-list">
            {peopleList && peopleList.map(({ name, url, gender }) => {
              return (
                <div key={name} className="individual-details">
                  <div className="first-letter">{firstLetter(name)}</div>
                  <div className="info">
                    <div className="name">
                      <Link to={`/people/1`}>{name}</Link>
                    </div>
                    <div className="other-info">
                      <span>{gender}</span>
                    </div>
                  </div>
                  <div className="details-icon">
                    <Link to={`/people/1`}>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default PeopleList;