import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Factory, ShieldCheck, Newspaper } from 'lucide-react';
import { IMAGES } from '../constants';

export const FactorySection = () => {
  const { t } = useLanguage();

  return (
    <section id="factory" className="py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-on-surface/5 overflow-hidden order-last lg:order-first"
          >
            <img 
              src={IMAGES.factory} 
              className="w-full h-full object-cover grayscale opacity-60"
              alt="Factory"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8 block font-bold">
              {t.factory.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-10 leading-tight">
              {t.factory.title}
            </h2>
            <p className="font-sans text-base text-on-surface-variant mb-12 leading-relaxed">
              {t.factory.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {t.factory.certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface border border-outline-variant/10 group-hover:border-primary/30 transition-colors">
                    <ShieldCheck size={20} className="text-primary" />
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-on-surface font-bold">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
