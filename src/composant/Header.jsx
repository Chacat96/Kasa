import React from "react";
import { useEffect, useState } from "react";
import LOGO from "../assets/logo/LOGO.png";
import  "../style/css/Header.css";

const Header = React.FC = () => {
    const [activePage, setActivePage] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => setActivePage(window.location.pathname);
        window.addEventListener("popstate", handleLocationChange);
        return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    return (
        <nav className="header">
            <img src={LOGO} alt="logo kasa" className="header__logo-header"/>
            <div className="header__nav-header">
            <a href="/" className={activePage === "/" ? "active" : ""}>Accueil</a>
                <a href="/about" className={activePage === "/about" ? "active" : ""}>À propos</a>
            </div>
        </nav>
    );
};

export default Header;