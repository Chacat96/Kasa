import React from "react";
import "../style/css/About.css";
import imgAbout from "../assets/img/imgAbout.png";
import Dropdown from "../composant/Dropdown";
import dataAbout from "../json/dataAbout.json";

const About = () => {
    return (
        <div className="about">
             <div className="about__banner">
                <img src={imgAbout} alt="" className="about__banner__img"/>
            </div>

            <div className="about__dropdown">
                {dataAbout.map((data) => (
                    <Dropdown
                        key={data.id}
                        title={data.title}
                        description={data.content}
                    />
                ))}
            </div>            
        </div>
    );
};

export default About;