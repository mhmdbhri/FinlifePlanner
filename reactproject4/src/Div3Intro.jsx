import React from 'react';
import img3 from './images/plan.webp';
import './Div2Intro.css'; // Ensure this CSS file is imported

const Div3Intro = () => {
    return (
        <div className="container">
            <div className="text-content">
                
                <h2><strong>
                    SET FUTURE GOALS AND GET A CLEAR ROAD MAP THAT LEADS TO THE GOAL SUCCESS IN THE BEST DURATION.</strong>
                </h2>
            </div>
            <img 
                src={img3} 
                alt="description" 
                className="side-image" 
            />
        </div>
    );
};

export default Div3Intro;