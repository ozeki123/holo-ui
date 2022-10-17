import React from "react";
import { Link } from "react-router-dom";
import "./Experience.scss";
import { ReactComponent as StarIcon } from "../../../assets/icons/star-svgrepo-com.svg";

const Experience = ({ experience }) => {
  return (
    <div className="list-item">
        <div className="item-title">
          <p className="item-name">{experience.title}</p>
          <p className="item-rating">
            <span>
              <StarIcon/>
            </span>
            {experience.rating}
          </p>
        </div>
      <p className="item-location">{experience.location}</p>
    </div>
  )
}

export default Experience;