import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Secteurs from '@/pages/Secteurs';
import ConseilPage from '@/pages/services/Conseil';
import RepresentationPage from '@/pages/services/Representation';
import EtudesPage from '@/pages/services/Etudes';
import FiscalPage from '@/pages/services/Fiscal';
import StrategiePage from '@/pages/services/Strategie';
import RHPage from '@/pages/services/RH';
import AgricoleSubsectors from '@/pages/secteurs/Agricole';
import MinierSubsectors from '@/pages/secteurs/Minier';
import FinancierSubsectors from '@/pages/secteurs/Financier';

const AppRouter: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/secteurs/agricole" element={<AgricoleSubsectors />} />
          <Route path="/secteurs/minier" element={<MinierSubsectors />} />
          <Route path="/secteurs/financier" element={<FinancierSubsectors />} />
          <Route path="/services/conseil" element={<ConseilPage />} />
          <Route path="/services/conseil/fiscal" element={<FiscalPage />} />
          <Route path="/services/conseil/strategie" element={<StrategiePage />} />
          <Route path="/services/conseil/rh" element={<RHPage />} />
          <Route path="/services/representation" element={<RepresentationPage />} />
          <Route path="/services/etudes" element={<EtudesPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default AppRouter;