//import react stuff
import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
//import the pages
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Sets } from './pages/Sets.js';
import { Study } from './pages/Study.js';
import { Profile } from './pages/Profile.js';
import { Register } from './pages/Register.js';
import { Login } from './pages/Login.js';

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
          <Route path="sets" element={<Sets />} />
          <Route path="study" element={<Study />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      </div>
    </>
    );
}

export default App;