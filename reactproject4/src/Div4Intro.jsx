import React from 'react';
import './Div1Intro.css'; // Make sure to create this CSS file
import img4 from './images/to.webp';

const Div4Intro = () => {
    return (
        <div className="container">
            <img 
                src= {img4}
                alt="description" 
                className="side-image" 
            />
            <div className="text-content">
              
                <h2><strong>
                    GET DAILY PLANS THAT HELP YOU ORGANIZE YOUR DAY ACCORDING TO THE TASKS YOU WANT TO ACCOMPLISH, USING A DAILY BUDGET.</strong>
                </h2>
            </div>
        </div>
    );
};

export default Div4Intro;