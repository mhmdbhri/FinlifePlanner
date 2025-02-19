import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignUp';
import Introduction from './Introduction';
import Card from './Card';
import Div1Intro from './Div1Intro';
import Div2Intro from './Div2Intro';
import Div3Intro from './Div3Intro';
import Div4Intro from './Div4Intro';
import Div5Intro from './Div5Intro';
import About from './About'; // Import the About component
import Features from './Features'; // Correct import
import Home from './Home'
import Pricing from './Pricing'
function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/login" element={<Login />} />
                <Route path="/SignUp" element={<SignIn />} />
                <Route path="/Card" element={<Card />} />
                <Route path="/Div1Intro" element={<Div1Intro />} />
                <Route path="/Div2Intro" element={<Div2Intro />} />
                <Route path="/Div3Intro" element={<Div3Intro />} />
                <Route path="/Div4Intro" element={<Div4Intro />} />
                <Route path="/Div5Intro" element={<Div5Intro />} />
                <Route path="/about" element={<About />} /> {/* Add the About route */}
                <Route path="/features" element={<Features />} /> {/* Correct usage */}
                <Route path="/home" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </Router>
    );
}

export default App;