import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

export const ThesisSection = () => {
  const { t } = useLanguage();

  return (
    <section id="thesis" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Literature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-on-surface mb-16 flex items-center gap-4">
              <BookOpen size={32} className="text-primary" />
              {t.thesis.title}
            </h2>
            <div className="space-y-12">
              {t.thesis.items.map((item, i) => (
                <div key={i} className="border-l-2 border-primary/20 pl-8 py-2 hover:border-primary transition-colors group">
                  <h4 className="font-serif text-xl text-on-surface mb-4 group-hover:text-primary transition-colors">{item.journal}</h4>
                  <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA with Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] bg-on-surface/5 overflow-hidden relative group">
              <img 
                src={IMAGES.thesis} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000"
                alt="Thesis Center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <div className="bg-surface/90 backdrop-blur-sm p-8 md:p-10 border border-outline-variant/10 text-center w-full">
                  <h3 className="font-serif text-2xl md:text-3xl text-on-surface mb-8 italic leading-tight">
                    {t.thesis.cta}
                  </h3>
                  <div className="flex flex-col items-center gap-8">
                    <div className="h-px w-16 bg-primary"></div>
                    <a 
                      href="#newsletter" 
                      className="inline-flex items-center gap-4 text-primary font-sans text-xs uppercase tracking-[0.3em] font-bold group/link"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
