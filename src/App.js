import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Event from './component/Event';

import VantaBackground from './component/VantaBackground';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<VantaBackground effect="waves" />} />
          <Route path="/event" element={<VantaBackground effect="birds" />} />
          {/* Add more routes and different backgrounds */}
        </Routes>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/event" element={<Event />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
