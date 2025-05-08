import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Request from './components/Request';
import About from './components/About';
import Register from './components/Register';
import Header from './components/common/Header';
import Profile from './components/Profile';

const isAuthenticated = () => {
  return localStorage.getItem("jsonWebToken") !== null;
}

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Header/>
          <Home/>
        </PrivateRoute>
      }/>
      <Route path="/login" element={
        <Login/>  
      }/>
      <Route path="/register" element={
        <Register/>
      }/>
      <Route path='/createRequest' element={
        <PrivateRoute>
          <Header/>
          <Request/>
        </PrivateRoute>
      }/>
      <Route path='/about' element={
        <PrivateRoute>
          <Header/>
          <About/>
        </PrivateRoute>
      }/>
      <Route path='/profile' element={
        <PrivateRoute>
          <Header/>
          <Profile/>
        </PrivateRoute>
      }/>
    </Routes>
  </Router>
);

export default App
