import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PlumbingLanding from './pages/PlumbingLanding';
import BuildingLanding from './pages/BuildingLanding';
import PlasteringLanding from './pages/PlasteringLanding';
import ElectricalLanding from './pages/ElectricalLanding';
import MarbleLanding from './pages/MarbleLanding';
import CeramicLanding from './pages/CeramicLanding';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PhoneButton from './components/PhoneButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plumbing-services" element={<PlumbingLanding />} />
          <Route path="/building-services" element={<BuildingLanding />} />
          <Route path="/plastering-services" element={<PlasteringLanding />} />
          <Route path="/electrical-services" element={<ElectricalLanding />} />
          <Route path="/marble-services" element={<MarbleLanding />} />
          <Route path="/ceramic-services" element={<CeramicLanding />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
      <PhoneButton />
    </div>
  );
}
