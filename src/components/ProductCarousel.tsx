import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export const ProductCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // Auto-hide toast after 3 seconds
  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Add "Coming Soon" as the 6th item
  const allItems = [
    ...t.products.items,
    {
      name: t.products.comingSoon,
      desc: "Stay tuned for our latest biological breakthrough.",
      category: "Future",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
      isPlaceholder: true
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % allItems.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
  };

  // Get 3 visible items with wrap-around
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(allItems[(currentIndex + i) % allItems.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section id="products" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block font-bold"
            >
              {t.products.label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl text-on-surface leading-tight"
            >
              {t.products.title}
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant/20 hover:border-primary text-on-surface hover:text-primary transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-outline-variant/20 hover:border-primary text-on-surface hover:text-primary transition-colors"
              aria-label="Next product"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${item.name}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group"
                >
                  <div className={`relative aspect-[3/4] overflow-hidden mb-8 flex items-center justify-center p-12 bg-surface-container-lowest`}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className={`w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 ${'isPlaceholder' in item ? 'grayscale opacity-20' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                    
                    {'isPlaceholder' in item && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span 
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="font-serif text-6xl text-primary/30 tracking-[0.2em]"
                        >
                          ...
                        </motion.span>
                      </div>
                    )}
                    
                    {!('isPlaceholder' in item) && (
                      <button 
                        onClick={() => setShowToast(true)}
                        className="absolute bottom-8 right-8 w-12 h-12 bg-surface text-on-surface flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-on-primary shadow-lg"
                      >
                        <Plus size={20} />
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-primary font-bold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl text-on-surface group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100]"
            >
              <div className="bg-on-surface text-surface px-8 py-4 shadow-2xl border border-primary/20 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
                  {t.products.mallComingSoon}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
