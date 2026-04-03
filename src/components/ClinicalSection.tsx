import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { LineChart, Microscope, FileText } from 'lucide-react';
import { IMAGES } from '../constants';

export const ClinicalSection = () => {
  const { t } = useLanguage();

  return (
    <section id="clinical" className="py-32 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary mb-8 block font-bold">
              {t.clinical.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-10 leading-tight">
              {t.clinical.title}
            </h2>
            <div className="p-8 bg-surface-container-low border-l-4 border-primary mb-12">
              <p className="font-serif text-2xl text-on-surface mb-4">
                {t.clinical.conclusion}
              </p>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                {t.clinical.summary}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <LineChart size={24} className="text-primary mb-4" />
                <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Visible Results</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Microscope size={24} className="text-primary mb-4" />
                <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Cellular Level</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText size={24} className="text-primary mb-4" />
                <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Peer Reviewed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-on-surface/5 overflow-hidden shadow-2xl"
          >
            <img 
              src={IMAGES.clinical} 
              className="w-full h-full object-cover grayscale opacity-40 hover:scale-105 transition-transform duration-1000"
              alt="Clinical Research Paper"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
            <div className="absolute inset-0 border-[20px] border-surface/10 pointer-events-none"></div>
            <div className="absolute bottom-12 right-12 bg-surface p-8 border border-outline-variant/10 max-w-xs shadow-xl">
              <p className="font-serif text-lg text-on-surface italic mb-4">
                "Significant delay in epigenetic aging by 3.08 years."
              </p>
              <div className="h-px w-12 bg-primary"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
