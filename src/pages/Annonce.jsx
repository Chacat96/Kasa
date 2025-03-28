import React from "react";
import { useParams } from "react-router-dom";
import  "../style/css/Annonce.css";
import data from "../json/data.json";
import Carrousel from "../composant/Carrousel";

const Annonce = () => {

const { id } = useParams(); 
const annonce = data.find(item => item.id === id); 

    return (
        <div className="annonce">
            <h1>{annonce.title}</h1>
            <Carrousel img={annonce.pictures} />  
            <p>{annonce.description}</p>
        </div>
    );

};

export default Annonce;