import React from 'react';
import img2 from './images/uni.webp';
import './Div2Intro.css'; // Ensure this CSS file is imported

const Div2Intro = () => {
    return (
        <div className="container">
            <div className="text-content">
                
                <h2><strong>
                    GET PLANS AND ARRANGEMENTS THAT ALWAYS KEEP YOU ABLE TO PAY YOUR BILLS AND FINANCIAL DUES ON TIME WITH EASE.</strong>
                </h2>
            </div>
            <img 
                src={img2} 
                alt="description" 
                className="side-image" 
            />
        </div>
    );
};

export default Div2Intro;