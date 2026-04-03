import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { BookOpen, Award } from 'lucide-react';

export const LiteratureSection = () => {
  const { t } = useLanguage();

  return (
    <section id="literature" className="py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Literature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-on-surface mb-16 flex items-center gap-4">
              <BookOpen size={32} className="text-primary" />
              {t.literature.title}
            </h2>
            <div className="space-y-12">
              {t.literature.items.map((item, i) => (
                <div key={i} className="border-l-2 border-primary/20 pl-8 py-2 hover:border-primary transition-colors">
                  <h4 className="font-serif text-xl text-on-surface mb-4">{item.journal}</h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-surface-container-high p-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-on-surface mb-12 flex items-center gap-4">
              <Award size={32} className="text-primary" />
              {t.certifications.title}
            </h2>
            <p className="font-serif text-xl text-primary mb-12 italic">
              {t.certifications.patent}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {t.certifications.list.map((cert, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="h-px w-8 bg-primary/30"></div>
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
