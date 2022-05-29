import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kalkulator from './components/pages/Kalkulator';
import OmOss from './components/pages/OmOss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/kalkulator' exact element={<Kalkulator/>} />
          <Route path='/om-oss' exact element={<OmOss/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
