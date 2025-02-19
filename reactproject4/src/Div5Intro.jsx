import React from 'react';
import img5 from './images/dubia.webp';
import './Div2Intro.css'; // Ensure this CSS file is imported

const Div5Intro = () => {
    return (
        <div className="container">
            <div className="text-content">
                
                <h2><strong>
                    CHOOSE THE BEST RECOMMENDED LOCATION IN  UAE AS FIRST STATION BASED ON A SPECIFIED BUDGET.</strong>
                </h2>
            </div>
            <img 
                src={img5} 
                alt="description" 
                className="side-image" 
            />
        </div>
    );
};

export default Div5Intro;