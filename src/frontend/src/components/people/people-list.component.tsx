import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./people-list.style.scss";
import { StarsWarContext } from "../../context/stars-wars.contex";
import Search from "../search/search.componet";
import Pagination from "../pagination/pagination.component";


export const Loader = () => {
  return (
    <div style={{ color: '#fff', fontSize: '32px'}}>Loading...</div>
  )
};


const PeopleList = () => {
  const { 
    peopleList,
    count, 
    firstLetter, 
    loading, 
  } = useContext(StarsWarContext);

  const listPerPage = 10;

  return (
    <div className="outer-wrapper">
      <Search />
      {loading ? (
        <Loader />
      ): (
        <Fragment>
            <div className="count">{`Showing ${count < listPerPage ? count : listPerPage} of ${count}`}</div>
            <div className="people-list">
            {peopleList && peopleList.map(({ id, name, gender }) => {
              return (
                <div key={id} className="person-details">
                  <div className="first-letter">{firstLetter(name)}</div>
                  <div className="info">
                    <div className="name">
                      <Link to={`/people/${id}`}>{name}</Link>
                    </div>
                    <div className="other-info">
                      <span>{gender}</span>
                    </div>
                  </div>
                  <div className="details-icon">
                    <Link to={`/people/${id}`}>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <Pagination />
        </Fragment>
      )}
    </div>
  )
}

export default PeopleList;