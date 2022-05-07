import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import './individual-details.styles.scss'
import avatar from '../../assets/avatar.png'

const IndividualDetails = () => {
  return (
    <div className="outer-wrapper">
      <div className="bedcrumb">
        <span>
          <Link to='/'>Home</Link>
        </span>
        <span><FiChevronRight /></span>
        <span>James Smith</span>
      </div>
      <div className="info-wrapper">
        <div className="avatar">
          <img src={avatar} alt='avatar' />
        </div>
        <div className="details">
          <div className="name">
            <h2>James Smith</h2>
          </div>
          <div className="other-info">
            <span className="info-text">
              <span>Gender</span>
              <span>Male</span>
            </span>
            <span className="info-text">
              <span>Height</span>
              <span>172</span>
            </span>
            <span className="info-text">
              <span>Mass</span>
              <span>77</span>
            </span>
            <span className="info-text">
              <span>Hair Color</span>
              <span>Blond</span>
            </span>
            <span className="info-text">
              <span>Skin Color</span>
              <span>Fair</span>
            </span>
            <span className="info-text">
              <span>Eye Color</span>
              <span>Male</span>
            </span>
            <span className="info-text">
              <span>Birth Year</span>
              <span>Male</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualDetails