import React from "react";
import "./Home.css";

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Take Control of Your Finances</h1>
                    <p>Track expenses, set goals, and achieve financial freedom with Finlife Planner.</p>
                    <div className="cta-buttons">
                        <button className="cta-button primary">Get Started for Free</button>
                        <button className="cta-button secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://via.placeholder.com/600x400" alt="Finlife Planner Dashboard" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Finlife Planner?</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <div className="feature-icon">📊</div>
                        <h3>Budget Tracking</h3>
                        <p>Monitor your spending and stay within your limits with real-time updates.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">🎯</div>
                        <h3>Goal Setting</h3>
                        <p>Set financial goals and track your progress with actionable insights.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">📑</div>
                        <h3>Expense Reports</h3>
                        <p>Generate detailed reports to analyze your finances and make smarter decisions.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-list">
                    <div className="testimonial">
                        <p>"Finlife Planner has completely changed how I manage my money! It's intuitive and powerful."</p>
                        <div className="user-info">
                           
                            <h4>Alex T.</h4>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"I love the simplicity and insights. Highly recommended for anyone looking to take control of their finances!"</p>
                        <div className="user-info">
                            
                            <h4>Sarah W.</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="cta-section">
                <h2>Ready to Transform Your Finances?</h2>
                <p>Join thousands of users who are achieving their financial goals with Finlife Planner.</p>
                <button className="cta-button primary">Start Your Free Trial</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 Finlife Planner. All rights reserved.</p>
               
            </footer>
        </div>
    );
};

export default HomePage;