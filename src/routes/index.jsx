import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';

function Rotas() {
  const basename = process.env.NODE_ENV === 'production' ? '/' : '/institutocaridadearacaju';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
