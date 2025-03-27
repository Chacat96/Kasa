import React from "react";
import "../style/css/Card.css";


const Card= React.FC = ({title, img}) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${img})` }}>
            <p className="card__title">{title}</p>
        </div>
    );
};

export default Card;