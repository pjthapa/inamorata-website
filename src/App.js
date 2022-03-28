import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import HomePage from './pages/home.js';
import EventPage from './pages/event.js';
import AboutPage from './pages/about.js'
import BackPage from './pages/eventBackend';

function App() {
  return (
    <ParallaxProvider>
        <Router>
            <Routes>
              <Route path="/" exact element={<HomePage />}> </Route>
              <Route path="/event" element={<EventPage />}> </Route>
              <Route path="/about"  element={<AboutPage />}> </Route>
              <Route path="/event/Cassie" element={<BackPage />} ></Route>
            </Routes>
        </Router>
    </ParallaxProvider>
  );
}

export default App;
