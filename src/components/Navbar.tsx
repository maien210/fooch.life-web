import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { t, setLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '中文 (简)' },
    { code: 'zh-TW', label: '中文 (繁)' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'py-10'}`}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl tracking-[0.3em] transition-colors duration-500 ${isScrolled ? 'text-on-surface' : 'text-surface'}`}>FOOCHY</a>

        <div className={`hidden lg:flex items-center gap-12 font-sans uppercase tracking-[0.3em] text-[11px] font-bold transition-colors duration-500 ${isScrolled ? 'text-on-surface-variant' : 'text-surface/70'}`}>
          <a href="#home" className="hover:text-primary transition-colors">{t.nav.home}</a>
          <a href="#science" className="hover:text-primary transition-colors">{t.nav.science}</a>
          <a href="#products" className="hover:text-primary transition-colors">{t.nav.products}</a>
          <a href="#authority" className="hover:text-primary transition-colors">{t.nav.authority}</a>
          <a href="#clinical" className="hover:text-primary transition-colors">{t.nav.clinical}</a>
          <a href="#factory" className="hover:text-primary transition-colors">{t.nav.factory}</a>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-2 font-sans uppercase tracking-[0.2em] text-[11px] font-bold transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-primary-container'} hover:opacity-70 transition-opacity`}
            >
              <Globe size={14} />
              <span className="hidden sm:inline">{t.nav.language}</span>
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-40 bg-surface-container-lowest shadow-xl border border-outline-variant/20 py-2"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-surface-container transition-colors ${language === lang.code ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-bright border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 font-sans uppercase tracking-[0.2em] text-[10px] font-medium">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
              <a href="#science" onClick={() => setIsMenuOpen(false)}>{t.nav.science}</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</a>
              <a href="#authority" onClick={() => setIsMenuOpen(false)}>{t.nav.authority}</a>
              <a href="#clinical" onClick={() => setIsMenuOpen(false)}>{t.nav.clinical}</a>
              <a href="#factory" onClick={() => setIsMenuOpen(false)}>{t.nav.factory}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
