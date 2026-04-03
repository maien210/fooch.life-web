import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';

export const ProductShowcase = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-40 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-6 block font-bold"
            >
              {t.products.label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl text-on-surface leading-[1.1] tracking-tight"
            >
              {t.products.title}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32">
          {t.products.items.map((item, index) => {
            // Define a custom grid layout for a "Premium Gallery" feel
            const gridClasses = [
              "md:col-span-7", // Item 1: Large
              "md:col-span-5 md:mt-32", // Item 2: Offset
              "md:col-span-4", // Item 3: Small
              "md:col-span-8 md:-mt-24", // Item 4: Wide offset
              "md:col-span-6 md:col-start-4", // Item 5: Centered bottom
            ][index] || "md:col-span-6";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${gridClasses} group`}
              >
                <div className="relative aspect-[4/5] bg-surface-container-lowest overflow-hidden flex items-center justify-center p-12 transition-all duration-700 group-hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]">
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <img
                    src={item.image}
                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                    alt={item.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="mt-10 space-y-4 max-w-md">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-primary/30" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-on-surface leading-tight group-hover:text-primary transition-colors duration-500">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed tracking-wide opacity-80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
