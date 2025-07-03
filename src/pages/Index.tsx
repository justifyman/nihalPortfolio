
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
