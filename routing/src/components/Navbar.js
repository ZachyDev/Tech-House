import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
        <Router>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Navbar