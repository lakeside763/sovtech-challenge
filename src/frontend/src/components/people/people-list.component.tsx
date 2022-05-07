import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { FiArrowRight } from "react-icons/fi";
import './people-list.style.scss';

const GET_PEOPLE_LIST = gql`
  query GetPeopleList {
    getPeopleList {
      count
      previous
      next
      people {
        name
        mass
        hair_color
        eye_color
        gender
        homeworld
        url
      }
    }
  }
`;

const Loader = () => {
  return (
    <div style={{ color: '#fff', fontSize: '32px'}}>Loading...</div>
  )
}

const PeopleList = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [count, setCount] = useState();
  // const [page, setPage] = useState(1);
  const { loading, data } = useQuery(GET_PEOPLE_LIST);

  useEffect(() => {
    if (data) {
      console.log(data);
      const { getPeopleList: { count, people } } = data;
      setPeopleList(people);
      setCount(count);
    }
  }, [data]);

  // useEffect(() => {
  //   setPage(1);
  // }, [page])

  const firstLetter = (text: string) => text.charAt(0)

  return (
    <div className="outer-wrapper">
      <div className="search-wrapper">
        <input type='text' name='search' placeholder='Search for your stars' />
        <button>Search</button>
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