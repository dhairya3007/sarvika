import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformSection from './components/PlatformSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { initAnalytics } from './utils/analytics';

// Default assets from workspace
// If user provides external URLs separately, they can easily replace these or configure via props
const SARVIKA_LOGO_URL = '/logosarvika.png';
const SARVIKA_PRELOADER_URL = '/12-beacon-pipeline (2).svg';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="sarvika-app-root">
      {/* Authentic SARVIKA Preloader */}
      <Preloader 
        preloaderUrl={SARVIKA_PRELOADER_URL} 
        logoUrl={SARVIKA_LOGO_URL} 
        onFinish={() => setPreloaderFinished(true)}
      />

      {/* Responsive Navbar */}
      <Navbar logoUrl={SARVIKA_LOGO_URL} />

      {/* Main Content Single-Page Flow */}
      <main id="main-content">
        {/* Hero Section with Headline and 6-Feature Diagram */}
        <Hero logoUrl={SARVIKA_LOGO_URL} isPreloaded={preloaderFinished} />

        {/* Practice Management Bento-Box Platform Section */}
        <PlatformSection />

        {/* Core Capabilities Features Matrix */}
        <CapabilitiesSection />

        {/* About SARVIKA Section */}
        <AboutSection />

        {/* Transparent Pricing Plans */}
        <PricingSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Schedule Demo Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer logoUrl={SARVIKA_LOGO_URL} />
    </div>
  );
}
