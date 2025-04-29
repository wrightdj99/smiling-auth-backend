import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Request from './components/Request';
import About from './components/About';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/createRequest' element={<Request/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </Router>
);

export default App
