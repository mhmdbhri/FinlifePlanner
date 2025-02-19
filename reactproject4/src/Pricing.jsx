import React from "react";
import "./Pricing.css"; // Import the CSS file

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: ["Basic budgeting", "Expense tracking", "Limited reports"],
            buttonText: "Get Started",
            popular: false,
        },
        {
            name: "Pro",
            price: "$9.99/mo",
            features: ["All Free features", "Advanced analytics", "Custom categories", "Sync bank accounts"],
            buttonText: "Start Free Trial",
            popular: true,
        },
        {
            name: "Premium",
            price: "$99.99/yr",
            features: ["All Pro features", "Priority support", "Multi-user access", "Early feature access"],
            buttonText: "Go Premium",
            popular: false,
        },
    ];

    return (
        <div className="pricing-container">
            <div className="pricing-header">
                <h2>Choose Your Plan</h2>
                <p>Simple and transparent pricing for every budget.</p>
            </div>
            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                        {plan.popular && <span className="popular-badge">Most Popular</span>}
                        <div className="card-header">
                            <h3>{plan.name}</h3>
                            <p className="price">{plan.price}</p>
                        </div>
                        <ul className="features-list">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>✔ {feature}</li>
                            ))}
                        </ul>
                        <button className={`plan-button ${plan.popular ? "popular-button" : ""}`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;