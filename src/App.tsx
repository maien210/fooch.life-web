import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCarousel } from './components/ProductCarousel';
import { ScienceSection } from './components/ScienceSection';
import { AuthoritySection } from './components/AuthoritySection';
import { ClinicalSection } from './components/ClinicalSection';
import { FactorySection } from './components/FactorySection';
import { ThesisSection } from './components/ThesisSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-primary/20 selection:text-primary relative">
        <div className="noise-overlay"></div>
        <Navbar />
        <main>
          <Hero />
          <ScienceSection />
          <ProductCarousel />
          <AuthoritySection />
          <ClinicalSection />
          <FactorySection />
          <ThesisSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
