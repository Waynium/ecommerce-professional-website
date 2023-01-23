import logo from './logo.svg'
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import DesignArtworks from './Components/Design Artworks/DesignArtworks'
import GuitarServices from './Components/Guitar Services/GuitarServices'
import SoftwareServices from './Components/Software Services/SoftwareServices'
import About from './Components/About/About'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/Home" element={Home} />
        <Route path="/DesignArtworks" element={DesignArtworks} />
        <Route path="/GuitarServices" element={GuitarServices} />
        <Route path="/SoftwareServices" element={SoftwareServices} />
        <Route path="/About" element={About} />
      </Routes>
    </>
  );
}

export default App;
