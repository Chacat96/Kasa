import React from "react";
import starActive from "../assets/icon/star-active.png";
import starInactive from "../assets/icon/star-inactive.png"
import "../style/css/Rating.css";

const Rating = ({ rating }) => {
    const totalStars = 5; 

    return (
        <div className="rating">
            {[...Array(totalStars)].map((_, index) => (
                  <img
                  key={index}
                  src={index < rating ? starActive : starInactive}
                  alt={index < rating ? "Étoile rouge" : "Étoile grise"}
                  className="rating__star"
              />
            ))}
        </div>
    );
};

export default Rating;
