import React from "react";
import "../style/css/Tag.css";


const Tag = ({title}) => {
    return (
        <div className="tag"> 
            {title}
        </div>
    );
};

export default Tag;