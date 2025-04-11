import React, { useState } from "react";
import  "../style/css/Carrousel.css";
import leftArrow from "../assets/icon/arrow_left.png";
import rightArrow from "../assets/icon/arrow_right.png";

const Carrousel = ({img}) => {
    const [index, setIndex] = useState(0);

    const nextImage = () => setIndex((index + 1) % img.length);
    const prevImage = () => setIndex((index - 1 + img.length) % img.length);
   
    //Rendu d'une image ou plusieurs dans le carrousel
    if (img.length === 1) {
        return <img src={img[0]} alt="image de l'annonce" className="carrousel__image" />;
    } else {
        return (
       <div className="carrousel">
            <img src={img[index]} alt={`image ${index + 1}`} className="carrousel__image" />
       
       <div className="carrousel__nbr">
        <p>{index + 1}/{img.length}</p>
       </div>
        <div className="carrousel__arrow">
            <img src={leftArrow} alt="left arrow" onClick={prevImage}/>
            <img src={rightArrow} alt="right arrow" onClick={nextImage}/>
        </div>
        
       </div>
    );
    }

   
   
};

export default Carrousel;