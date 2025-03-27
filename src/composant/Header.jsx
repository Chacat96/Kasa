import React from "react";
import LOGO from "../assets/logo/LOGO.png";
import  "../style/css/Header.css";

const Header = React.FC = () => {
    return (
        <nav className="header">
            <img src={LOGO} alt="logo kasa" className="header__logo-header"/>
            <div className="header__nav-header">
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>
            </div>
        </nav>
    );
};

export default Header;