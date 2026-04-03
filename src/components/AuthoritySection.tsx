import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Rocket, Award } from 'lucide-react';
import { IMAGES } from '../constants';

export const AuthoritySection = () => {
  const { t } = useLanguage();

  return (
    <section id="authority" className="py-32 bg-surface-container overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary mb-8 block font-bold">
              {t.authority.label}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-on-surface mb-12 leading-tight">
              {t.authority.title}
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="p-3 bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-serif text-xl text-on-surface mb-2 leading-relaxed">{t.authority.olympic}</p>
                  <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">National Heritage</span>
                </div>
              </div>
              
              <div className="flex gap-8 items-start group">
                <div className="p-3 bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                  <Rocket size={24} />
                </div>
                <div>
                  <p className="font-serif text-xl text-on-surface mb-2 leading-relaxed">{t.authority.aerospace}</p>
                  <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Strategic Partnership</span>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="p-3 bg-primary/5 text-primary group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-serif text-xl text-on-surface mb-2 leading-relaxed">{t.authority.nobel}</p>
                  <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Scientific Recognition</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-on-surface/5 overflow-hidden"
            >
              <img 
                src={IMAGES.olympic} 
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000"
                alt="Olympic"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[3/4] bg-on-surface/5 overflow-hidden mt-12"
            >
              <img 
                src={IMAGES.aerospace} 
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000"
                alt="Aerospace"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 aspect-[21/9] bg-on-surface/5 overflow-hidden mt-4"
            >
              <img 
                src={IMAGES.nobel} 
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-1000"
                alt="Nobel"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 border border-primary/10 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
