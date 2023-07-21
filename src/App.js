import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PagenotFound from './pages/PagenotFound';
import React from 'react'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='*' element={<PagenotFound />} />
        </Routes>
        <h1> </h1>
      </Router>
    </>
  );
}

export default App;
