import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import './person-details.styles.scss'
import avatar from '../../assets/avatar.png'
import { gql, useQuery } from "@apollo/client";
import { PERSON_FRAGMENT } from "../../hooks/use-stars-war";
import { Loader } from "../people/people-list.component";


const GET_PERSON_BY_ID = gql`
  query GetPersonById($id: Int!) {
    getPersonById(id: $id) {
      ...personFields
    }
  }
  ${PERSON_FRAGMENT}
`;

interface Person {
  id: number;
  name: string;
  mass: string;
  height: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  gender: string;
  homeworld: string;
  url: string;
  birth_year: string;
}

const PersonDetails = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_PERSON_BY_ID, { variables: { id: parseInt(id!) } });
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    if (data) {
      const { getPersonById } = data;
      setPerson(getPersonById);
    }
  }, [data]);
  return (
    <Fragment>
      {loading ? (<Loader />) : (
        <div className="outer-wrapper">
          <div className="bedcrumb">
            <span>
              <Link to='/'>Home</Link>
            </span>
            <span><FiChevronRight /></span>
            <span>{person?.name}</span>
          </div>
          <div className="info-wrapper">
            <div className="avatar">
              <img src={avatar} alt='avatar' />
            </div>
            <div className="details">
              <div className="name">
                <h2>{person?.name}</h2>
              </div>
              <div className="other-info">
                <span className="info-text">
                  <span>Gender</span>
                  <span>{person?.gender}</span>
                </span>
                <span className="info-text">
                  <span>Height</span>
                  <span>{person?.height}</span>
                </span>
                <span className="info-text">
                  <span>Mass</span>
                  <span>{person?.mass}</span>
                </span>
                <span className="info-text">
                  <span>Hair Color</span>
                  <span>{person?.hair_color}</span>
                </span>
                <span className="info-text">
                  <span>Skin Color</span>
                  <span>{person?.skin_color}</span>
                </span>
                <span className="info-text">
                  <span>Eye Color</span>
                  <span>{person?.eye_color}</span>
                </span>
                <span className="info-text">
                  <span>Birth Year</span>
                  <span>{person?.birth_year}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </Fragment>
  )
}

export default PersonDetails