import React from 'react';
import './Div1Intro.css'; // Make sure to create this CSS file
import img1 from './images/TRY1.webp';

const Div1Intro = () => {
    return (
        <div className="container">
            <img 
                src= {img1}
                alt="description" 
                className="side-image" 
            />
            <div className="text-content">
              
                <h2><strong>
                    GET GRAPHICAL ILLUSTRATIONS THAT SHOWS THE CLEAR DIFFRENCE IN MONEY MANAGEMENT AND PROFIT GROWTH.</strong>
                </h2>
            </div>
        </div>
    );
};

export default Div1Intro;
