// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Sigin";
import Addbook from "./pages/Addbook";
import Dashoboard from "./pages/Dashoboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/dashboard" element={<Dashoboard/>} />
        <Route path="/" element={<Login />} />
        <Route path="/addbook" element={<Addbook/>} />
      
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;