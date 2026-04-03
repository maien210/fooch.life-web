import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { IMAGES } from '../constants';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-on-surface pt-20">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y, scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={IMAGES.hero} 
            className="w-full h-full object-cover"
            alt="Biological Innovation"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Sophisticated Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface/80 via-on-surface/40 to-on-surface/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-surface leading-[1.05] mb-16 tracking-[-0.03em] max-w-6xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="block"
            >
              {t.hero.title}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="italic font-light text-primary block mt-6"
            >
              {t.hero.titleItalic}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="max-w-2xl mb-20"
          >
            <p className="font-sans text-[10px] md:text-xs text-surface/50 leading-loose tracking-[0.25em] uppercase font-medium">
              {t.hero.breakthrough}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <a 
              href="#science" 
              className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden border border-primary/30"
            >
              <div className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative font-sans text-[10px] uppercase tracking-[0.3em] text-surface group-hover:text-on-surface transition-colors duration-500 font-bold">
                {t.hero.cta}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 hidden lg:block">
        <div className="w-px h-24 bg-primary/20"></div>
        <span className="font-sans text-[8px] uppercase tracking-widest text-primary/40 vertical-text mt-4">Est. 2024</span>
      </div>
    </section>
  );
};
