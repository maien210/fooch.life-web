import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export const Moodboard = () => {
  const images = [
    { url: IMAGES.abstract, span: 'col-span-2 row-span-2', delay: 0 },
    { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', span: 'col-span-1 row-span-1', delay: 0.1 },
    { url: 'https://images.unsplash.com/photo-1507652313519-d4511f7b4ad2?q=80&w=2070&auto=format&fit=crop', span: 'col-span-1 row-span-1', delay: 0.2 },
    { url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop', span: 'col-span-2 row-span-1', delay: 0.3 },
    { url: 'https://images.unsplash.com/photo-1559839734-2b71f173681c?q=80&w=2070&auto=format&fit=crop', span: 'col-span-1 row-span-1', delay: 0.4 },
    { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop', span: 'col-span-1 row-span-1', delay: 0.5 },
  ];

  return (
    <section className="py-12 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: img.delay, duration: 0.8 }}
              className={`${img.span} relative overflow-hidden bg-on-surface/5 group`}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                alt={`Moodboard ${i}`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
