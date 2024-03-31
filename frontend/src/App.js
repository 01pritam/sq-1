import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Events />
      <AboutUs />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
