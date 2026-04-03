import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export const Newsletter = () => {
  const { t } = useLanguage();

  return (
    <section id="newsletter" className="relative py-32 px-6 bg-on-surface overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.newsletter} 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Newsletter Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/80 to-on-surface/40"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary mb-8 block font-bold">
          {t.newsletter.title}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-surface mb-8">
          {t.newsletter.desc}
        </h2>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder={t.newsletter.placeholder}
            className="flex-1 bg-surface/5 border border-surface/20 px-6 py-4 font-sans text-xs text-surface uppercase tracking-widest focus:outline-none focus:border-primary transition-colors placeholder:text-surface/40"
            required
          />
          <button className="bg-primary text-on-primary px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition-all">
            {t.newsletter.button}
          </button>
        </form>
      </motion.div>
    </section>
  );
};
