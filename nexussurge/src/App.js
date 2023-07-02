//import react stuff
import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
//import the pages
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Add } from './pages/Add.js';
import { Study } from './pages/Study.js';
import { Profile } from './pages/Profile.js';
import { Register } from './pages/Register.js';
import { Login } from './pages/Login.js';
import { Cards } from './pages/Cards.js';

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
          <Route path="add" element={<Add />} />
          <Route path="study" element={<Study />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cards" element={<Cards />} />

        </Routes>
      </BrowserRouter>
      </div>
    </>
    );
}

export default App;