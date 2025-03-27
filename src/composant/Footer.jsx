import React from "react";
import logoWhite from "../assets/logo/logoWhite.png";
import  "../style/css/Footer.css";

const Footer = React.FC = () => {
    return (
       <div className="footer">
        <img src={logoWhite} alt="logo kasa" className="footer__logo-footer"/>
        <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
       </div>
    );
};

export default Footer;