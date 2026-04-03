import React from 'react';
import { useLanguage } from '../LanguageContext';
import { IMAGES } from '../constants';
import { motion } from 'motion/react';

export const BrandStory = () => {
  const { t } = useLanguage();

  return (
    <section id="brand-story" className="py-32 px-6 md:px-24 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src={IMAGES.brandStory} 
              className="w-full h-full object-cover grayscale"
              alt="Philosophy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 hidden xl:block w-64 aspect-square bg-surface-container-high p-8 shadow-sm">
            <p className="font-serif text-lg text-primary leading-relaxed italic">
              {t.brandStory.quote}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 lg:col-start-8 py-12"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary mb-8 block font-semibold">
            {t.brandStory.label}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-on-surface mb-10 leading-[1.1]">
            {t.brandStory.title}
          </h2>
          <div className="space-y-8 max-w-lg">
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              {t.brandStory.p1}
            </p>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              {t.brandStory.p2}
            </p>
          </div>
          <div className="mt-12 w-24 h-px bg-primary/30"></div>
        </motion.div>
      </div>
    </section>
  );
};
