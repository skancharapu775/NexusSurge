//import react stuff
import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
//import the pages
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Sets } from './pages/Sets.js';
import { Study } from './pages/Study.js';

function App() {

  return (
    <>
      {/* Routing to different pages, specify page to render */}
      <div className="global-style">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="flashcards" element={<Sets />} />
          <Route path="worksheets" element={<Study />} />

        </Routes>
      </BrowserRouter>
      </div>
    </>
    );
}

export default App;