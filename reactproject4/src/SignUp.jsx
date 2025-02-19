import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'; // To decode the JWT token
import './SignUp.css';
import signupImage from './images/signup.webp';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        document.body.style.background = `url(${signupImage}) no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';

        return () => {
            document.body.style.background = 'none';
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validation for username, email, and password
        if (username.length < 3 || password.length < 6 || !email.includes('@')) {
            setError(
                'Username must be at least 3 characters, password at least 6 characters, and email must be valid.'
            );
            return;
        }

        console.log('Username:', username, 'Email:', email, 'Password:', password);
        // Add your sign-up logic here

        // Redirect to the Login page after successful sign-up
        navigate('/login'); // Use navigate to redirect
    };

    const handleGoogleSuccess = (credentialResponse) => {
        // Decode the JWT token to get user info
        const decoded = jwt_decode(credentialResponse.credential);
        console.log('Google Sign-In Success:', decoded);

        // Extract user details
        const { name, email, picture } = decoded;

        // Store user info in localStorage or state (optional)
        localStorage.setItem('user', JSON.stringify({ name, email, picture }));

        // Redirect or show a success message
        alert(`Welcome, ${name}! You are now signed in.`);
        navigate('/dashboard'); // Redirect to dashboard or another page
    };

    const handleGoogleError = () => {
        console.log('Google Sign-In Failed');
        alert('Google Sign-In failed. Please try again.');
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>

                {/* Google Sign-In Button */}
                <div className="google-signin">
                    <GoogleOAuthProvider clientId="887261759420-54pvpccc3li8scdss8kfsmssti439bpq.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleError}
                            text="signup_with" // Changes the button text to "Sign up with Google"
                            shape="pill" // Optional: Rounded button
                            size="large" // Optional: Larger button
                        />
                    </GoogleOAuthProvider>
                </div>

                <div className="signup-links">
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;