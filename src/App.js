import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Event from './component/Event';
import VantaBackground from './component/VantaBackground';
import Home from './pages/Home';
import About from './pages/About';
import Tech from './component/Tech';  // Import Tech page
import NonTech from './component/NonTech';  // Import NonTech page

function App() {
    return (
        <Router>
            <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
                <Navbar />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    {/* VantaBackground component applied as a background */}
                    <Routes>
                        <Route path="/home" element={<VantaBackground effect="birds" />} />
                        <Route path="/event" element={<VantaBackground effect="net" />} />
                        <Route path="/about" element={<VantaBackground effect="rings" />} />
                        <Route path="/tech" element={<VantaBackground effect="net" />} />
                        <Route path="/nontech" element={<VantaBackground effect="net" />} />
                    </Routes>
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/tech" element={<Tech />} />
                        <Route path="/nontech" element={<NonTech />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
