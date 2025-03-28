import React from "react";
import "../style/css/Card.css";


const Card = ({title, img, onClick}) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${img})` }}onClick={onClick}> 
            <p className="card__title">{title}</p>
        </div>
    );
};

export default Card;