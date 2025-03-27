import React from "react";
import "../style/css/Accueil.css";
import imgAccueil from "../assets/img/imgAccueil.png";
import Card from "../composant/Card";

const Accueil = React.FC = () => {
    return (
        <div className="accueil">
            <div className="accueil__container">
                <h1 className="accueil__container__title">Chez vous, partout et ailleurs</h1>
            </div>

            <div className="accueil__annonce">
                <Card/>
            </div>
        </div>
    );
};

export default Accueil;