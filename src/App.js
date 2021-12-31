import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import HomePage from './pages/home.js';
import EventPage from './pages/event.js';
import AboutPage from './pages/about.js'
import BackPage from './pages/eventBackend';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='routes'>
          <Routes>
            <Route path="/" exact element={<HomePage />}> </Route>
            <Route path="/event" element={<EventPage />}> </Route>
            <Route path="/about"  element={<AboutPage />}> </Route>
            <Route path="/event/Cassie" element={<BackPage />} ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
