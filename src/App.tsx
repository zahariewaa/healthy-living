import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Nutrition, Exercise, MentalHealth, Contact } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;