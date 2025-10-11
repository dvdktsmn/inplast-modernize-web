
import React from 'react';
import Navbar from '../components/Navbar';
import KShowBanner from '../components/KShowBanner';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <KShowBanner />
      <div className="pt-16">
        <Hero />
        <About />
        <Products />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
