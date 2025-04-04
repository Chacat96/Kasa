import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  "../style/css/Annonce.css";
import data from "../json/data.json";
import Carrousel from "../composant/Carrousel";
import Dropdown from "../composant/Dropdown";
import Tag from "../composant/Tag";
import Rating from "../composant/Rating";

const Annonce = () => {

const { id } = useParams(); 
const annonce = data.find(item => item.id === id); 
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

if (isMobile) {
    return (
        <div className="annonce">
        <Carrousel img={annonce.pictures} />
        <div className="annonce__box">
            <div className="annonce__box__container-left">
                <h1>{annonce.title}</h1>
                <p>{annonce.location}</p>
                <div className="annonce__box__container-left__tag">
                    {annonce.tags.map((tag, index) =>
                        <Tag
                            key={index}
                            title={tag}
                        />
                    )}
                </div>
            </div>
            
            <div className="annonce__mobile-container">
                <div className="annonce__box__container-right__star">
                    <Rating
                        rating={parseInt(annonce.rating)}
                    />
                </div>
                <div className="annonce__box__container-right__profil">
                    <p>{annonce.host.name}</p>
                    <img src={annonce.host.picture} alt="photo du propriétaire" />
                </div>
            </div>
            
            <div className="annonce__dropdowns">
                <Dropdown
                    title={"Description"}
                    description={annonce.description}
                />
                <Dropdown
                    title={"Équipements"}
                    description={
                        <ul>
                            {annonce.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    </div>
);  
}

    return (
        <div className="annonce">
            <Carrousel img={annonce.pictures} /> 
            <div className="annonce__box">
                <div className="annonce__box__container-left">
                <h1>{annonce.title}</h1>
                <p>{annonce.location}</p>
                <div className="annonce__box__container-left__tag">
                    {annonce.tags.map((tag, index) =>
                        <Tag
                            key={index}
                            title={tag}
                        />
                    )}
                </div>
                <Dropdown
                    className="dropDownAnnonces"
                    title={"Description"}
                    description={annonce.description}
                />
                </div> 
                <div className="annonce__box__container-right">
                    <div className="annonce__box__container-right__profil">
                        <p>{annonce.host.name}</p>
                        <img src={annonce.host.picture} alt="photo du propriétaire" />
                    </div>
                    <div className="annonce__box__container-right__star">
                        <Rating
                            rating={parseInt(annonce.rating)}
                        />
                    </div>
                    <Dropdown
                    className="dropDownAnnonces"
                    title={"Équipements"}
                    description={
                        <ul>
                            {annonce.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                    />
                </div>
                </div>
        </div>
    );

};

export default Annonce;