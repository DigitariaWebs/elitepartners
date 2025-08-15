import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Secteurs from '@/pages/Secteurs';
import About from '@/pages/About';
import ConseilPage from '@/pages/services/Conseil';
import RepresentationPage from '@/pages/services/Representation';
import EtudesPage from '@/pages/services/Etudes';
import FiscalPage from '@/pages/services/Fiscal';
import StrategiePage from '@/pages/services/Strategie';
import RHPage from '@/pages/services/RH';
import EconomiquePage from '@/pages/services/Economique';
import StrategiquesPage from '@/pages/services/Strategiques';
import AgricoleSubsectors from '@/pages/secteurs/Agricole';
import MinierSubsectors from '@/pages/secteurs/Minier';
import FinancierSubsectors from '@/pages/secteurs/Financier';
import AdministratifPage from '@/pages/services/representation/administratif';
import LocalePage from '@/pages/services/representation/locale';
import PenetrationMarchePage from '@/pages/services/representation/penetration-marche';
import MarchePage from '@/pages/services/etudes/marche';
import EtudesEconomiquePage from '@/pages/services/etudes/economique';
import StrategiquePage from '@/pages/services/etudes/strategique';

// Agriculture subsector pages
import AgroalimentairePage from '@/pages/secteurs/agricole/agroalimentaire';
import VivrierePage from '@/pages/secteurs/agricole/vivriere';
import PechePage from '@/pages/secteurs/agricole/peche';
import IndustriellePage from '@/pages/secteurs/agricole/industrielle';

// Mining subsector pages
import ExplorationPage from '@/pages/secteurs/minier/exploration';
import ExploitationPage from '@/pages/secteurs/minier/exploitation';
import TransformationPage from '@/pages/secteurs/minier/transformation';
import CommercePage from '@/pages/secteurs/minier/commerce';

// Financial subsector pages
import BanquesPage from '@/pages/secteurs/financier/banques';
import AssurancePage from '@/pages/secteurs/financier/assurance';
import InvestissementPage from '@/pages/secteurs/financier/investissement';
import FintechPage from '@/pages/secteurs/financier/fintech';
import ProjectPage from '@/pages/projects/ProjectPage';
import AgroBusinessPage from '@/pages/projects/AgroBusiness';
import BusinessIntelligencePage from '@/pages/projects/BusinessIntelligence';
import SpecializedInvestmentBanksPage from '@/pages/projects/SpecializedInvestmentBanks';

const AppRouter: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/secteurs/agricole" element={<AgricoleSubsectors />} />
          <Route path="/secteurs/minier" element={<MinierSubsectors />} />
          <Route path="/secteurs/financier" element={<FinancierSubsectors />} />
          <Route path="/services/conseil" element={<ConseilPage />} />
          <Route path="/services/conseil/fiscal" element={<FiscalPage />} />
          <Route
            path="/services/conseil/strategie"
            element={<StrategiePage />}
          />
          <Route path="/services/conseil/rh" element={<RHPage />} />
          <Route
            path="/services/representation"
            element={<RepresentationPage />}
          />
          <Route
            path="/services/representation/administratif"
            element={<AdministratifPage />}
          />
          <Route
            path="/services/representation/locale"
            element={<LocalePage />}
          />
          <Route
            path="/services/representation/penetration-marche"
            element={<PenetrationMarchePage />}
          />
          <Route path="/services/etudes" element={<EtudesPage />} />
          <Route path="/services/etudes/marche" element={<MarchePage />} />
          <Route
            path="/services/etudes/economique"
            element={<EtudesEconomiquePage />}
          />
          <Route
            path="/services/etudes/strategique"
            element={<StrategiquePage />}
          />
          <Route path="/services/economique" element={<EconomiquePage />} />
          <Route path="/services/strategiques" element={<StrategiquesPage />} />

          {/* Agriculture subsector routes */}
          <Route
            path="/secteurs/agricole/agroalimentaire"
            element={<AgroalimentairePage />}
          />
          <Route
            path="/secteurs/agricole/vivriere"
            element={<VivrierePage />}
          />
          <Route path="/secteurs/agricole/peche" element={<PechePage />} />
          <Route
            path="/secteurs/agricole/industrielle"
            element={<IndustriellePage />}
          />

          {/* Mining subsector routes */}
          <Route
            path="/secteurs/minier/exploration"
            element={<ExplorationPage />}
          />
          <Route
            path="/secteurs/minier/exploitation"
            element={<ExploitationPage />}
          />
          <Route
            path="/secteurs/minier/transformation"
            element={<TransformationPage />}
          />
          <Route path="/secteurs/minier/commerce" element={<CommercePage />} />

          {/* Financial subsector routes */}
          <Route path="/secteurs/financier/banques" element={<BanquesPage />} />
          <Route
            path="/secteurs/financier/assurance"
            element={<AssurancePage />}
          />
          <Route
            path="/secteurs/financier/investissement"
            element={<InvestissementPage />}
          />
          <Route path="/secteurs/financier/fintech" element={<FintechPage />} />

          {/* Project routes - keeping for direct access even though removed from navbar */}
          <Route path="/projects/agrobusiness" element={<AgroBusinessPage />} />
          <Route
            path="/projects/business-intelligence"
            element={<BusinessIntelligencePage />}
          />
          <Route
            path="/projects/specialized-investment-banks"
            element={<SpecializedInvestmentBanksPage />}
          />
          <Route path="/projects/:projectSlug" element={<ProjectPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default AppRouter;