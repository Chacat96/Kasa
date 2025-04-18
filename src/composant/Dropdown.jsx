import { useState } from "react";
import "../style/css/Dropdown.css";
import upArrow from "../assets/icon/arrow_up.png";
import downArrow from "../assets/icon/arrow_down.png";

const Dropdown = ({ title, description, className }) => {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <div className={`dropdown ${className}`}>
            <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
                <p className="dropdown__header__title">{title}</p>
                <img src={isOpen ?  downArrow : upArrow} alt="arrow" className="dropdown__header__arrow" />
            </div>

            {isOpen && (
                <div className="dropdown__content">
                    <div>{description}</div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
