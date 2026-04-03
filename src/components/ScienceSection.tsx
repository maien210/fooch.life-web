import React from 'react';
import { useLanguage } from '../LanguageContext';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';
import { Beaker, Sparkles } from 'lucide-react';

export const ScienceSection = () => {
  const { t } = useLanguage();

  const icons = [<Beaker size={24} />, <Sparkles size={24} />];

  return (
    <section id="science" className="relative py-40 overflow-hidden bg-on-surface">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={IMAGES.scienceBg} 
          className="w-full h-full object-cover"
          alt="Science Background"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary-container mb-8 block font-semibold">
            {t.science.label}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-surface mb-8">
            {t.science.title}
          </h2>
          <div className="mb-12 relative">
            <p className="font-sans text-xl md:text-2xl text-primary leading-relaxed tracking-wide">
              {t.science.mechanism}
            </p>
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary/30"></div>
          </div>
          
          <div className="space-y-12">
            <div className="p-6 bg-surface/5 border-l-2 border-primary-container">
              <p className="text-surface/90 font-serif text-xl leading-relaxed">
                {t.science.seventhNutrient}
              </p>
            </div>

            {t.science.items.map((item, index) => (
              <div key={index} className="group cursor-default">
                <h4 className="font-serif text-2xl text-surface border-b border-outline-variant/20 pb-4 flex justify-between items-center group-hover:text-primary-container transition-colors">
                  {item.name}
                  <span className="text-primary-container opacity-50 group-hover:opacity-100 transition-opacity">
                    {icons[index]}
                  </span>
                </h4>
                <p className="mt-6 text-surface/70 leading-relaxed font-sans text-base tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] bg-surface/5 overflow-hidden shadow-2xl">
            <img 
              src={IMAGES.scienceDetail} 
              className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-1000"
              alt="Science Detail"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            
            {/* Decorative elements for premium feel */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-primary-container/30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-primary-container/30"></div>
          </div>
          
          {/* Floating detail card */}
          <div className="absolute -bottom-12 -right-12 bg-surface p-10 border border-outline-variant/10 shadow-2xl hidden md:block max-w-xs">
            <div className="w-12 h-1 bg-primary-container mb-6"></div>
            <p className="font-serif text-lg text-on-surface italic leading-relaxed">
              "Precision molecular intervention at the cellular core."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
