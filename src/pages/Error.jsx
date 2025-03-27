import React from "react";
import "../style/css/Error.css";

const Error = React.FC = () => {
    return (
        <div className="error"> 
            <h1 className="error__title">404</h1>
            <p className="error__text">Oups ! La page que vous demandez n'existe pas.</p>
            <a href="/" className="error__link">Retourner sur la page d’accueil</a>
        </div>
    );
};

export default Error;