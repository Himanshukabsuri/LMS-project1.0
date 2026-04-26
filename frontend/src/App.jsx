// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Sigin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Login />} />

      
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;