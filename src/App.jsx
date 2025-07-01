import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import AnnouncementBar from './components/ui/AnnouncementBar';
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import Enrolment from './pages/Enrolment';
import Facilities from './pages/Facilities';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/enrolment" element={<Enrolment />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;