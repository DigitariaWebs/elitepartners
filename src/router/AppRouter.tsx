import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Secteurs from '@/pages/Secteurs';
import ConseilPage from '@/pages/services/Conseil';
import RepresentationPage from '@/pages/services/Representation';
import EtudesPage from '@/pages/services/Etudes';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/secteurs" element={<Secteurs />} />
        <Route path="/services/conseil" element={<ConseilPage />} />
        <Route path="/services/representation" element={<RepresentationPage />} />
        <Route path="/services/etudes" element={<EtudesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;