import React from "react";
import "../style/css/Accueil.css";
import Card from "../composant/Card";
import data from "../json/data.json";

const Accueil = () => {
    return (
        <div className="accueil">
            <div className="accueil__container">
                <h1 className="accueil__container__title">Chez vous, partout et ailleurs</h1>
            </div>

            <div className="accueil__annonce">
                {data.map((annonce) => (
                    <Card
                        key={annonce.id}
                        title={annonce.title}
                        img={annonce.cover}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accueil;