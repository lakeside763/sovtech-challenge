import React, { Fragment, useEffect, useState } from "react";
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
  const { loading, data } = useQuery(GET_PEOPLE_LIST);

  useEffect(() => {
    if (data) {
      console.log(data);
      const { getPeopleList: { people } } = data;
      setPeopleList(people);
    }
  }, [data]);

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
            <div className="count">Showing 10 of 82</div>
            <div className="people-list">
            {peopleList && peopleList.map(({ name, mass, url }) => {
              return (
                <div key={name} className="individual-details">
                  <div className="first-letter">{firstLetter(name)}</div>
                  <div className="info">
                    <div className="name">{name}</div>
                    <div className="other-info">
                      <span>height: {mass}</span>
                      <span>Url: {url}</span>
                    </div>
                  </div>
                  <div className="details-icon">
                    <FiArrowRight />
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