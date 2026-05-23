'use client';

import { useEffect, useState } from 'react';
import TickerBar from './components/TickerBar';
import DividerTicker from './components/DividerTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import ManifestoSection from './components/ManifestoSection';
import EligibilitySection from './components/EligibilitySection';
import BroadImageSection from './components/BroadImageSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [tickerHidden, setTickerHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Hide ticker after 10px of scroll
      setTickerHidden(y > 10);
      // Apply scrolled style to navbar after 20px
      setScrolled(y > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TickerBar hidden={tickerHidden} />
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <DividerTicker />
        <VisionSection />
        <ManifestoSection />
        <EligibilitySection />
        <BroadImageSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
