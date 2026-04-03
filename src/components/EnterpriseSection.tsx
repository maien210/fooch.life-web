import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { Factory, ShieldCheck, Newspaper } from 'lucide-react';

export const EnterpriseSection = () => {
  const { t } = useLanguage();

  return (
    <section id="enterprise" className="py-32 bg-surface-container">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary mb-8 block font-bold">
              {t.enterprise.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-10 leading-tight">
              {t.enterprise.title}
            </h2>
            <p className="font-sans text-base text-on-surface-variant mb-12 leading-relaxed">
              {t.enterprise.factory}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-on-surface mb-2">Official Backing</h4>
                  <ul className="space-y-2">
                    {t.enterprise.backings.map((item, i) => (
                      <li key={i} className="text-sm text-on-surface-variant flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 text-primary">
                  <Newspaper size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-on-surface mb-2">Media Evaluation</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {t.enterprise.media}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-on-surface/5 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-80"
              alt="Factory"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
