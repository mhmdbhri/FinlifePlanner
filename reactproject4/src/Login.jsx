import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import React, { useState, useEffect } from 'react';
import './Login.css';
import loginImage from "./images/loginimage.webp";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        document.body.style.background = `url(${loginImage}) no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";

        return () => {
            document.body.style.background = "none"; // Reset when leaving the page
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Validation for username and password
        if (username.length < 3 || password.length < 6) {
            setError("Username must be at least 3 characters and password at least 6 characters.");
            return;
        }

        console.log("Username:", username, "Password:", password, "Remember Me:", rememberMe);
        // Add your login logic here

        // Redirect to the Home page (Introduction.jsx) after successful login
        navigate('/'); // Use navigate to redirect to the home page
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="login-links">
                    <Link to="/forgot-password">Forgot password?</Link>
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;