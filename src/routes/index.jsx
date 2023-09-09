import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';

function Rotas() {
  return (
    <BrowserRouter basename="/institutocaridadearacaju">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
