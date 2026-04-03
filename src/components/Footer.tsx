import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-high py-24 px-6 md:px-12 border-t border-outline-variant/20">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-xs">
          <h2 className="font-serif text-2xl tracking-[0.2em] text-on-surface mb-6">FOOCHY</h2>
          <p className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:gap-24 gap-12">
          <div className="flex flex-col gap-6">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-bold">
              {t.footer.navLabel}
            </span>
            <div className="flex flex-col gap-4">
              <a href="#home" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.nav.home}
              </a>
              <a href="#science" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.nav.science}
              </a>
              <a href="#products" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.nav.products}
              </a>
              <a href="#authority" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.nav.authority}
              </a>
              <a href="#clinical" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.nav.clinical}
              </a>
              <a href="#factory" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.nav.factory}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-bold">
              {t.footer.infoLabel}
            </span>
            <div className="flex flex-col gap-4">
              <a href="#" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.footer.legal}
              </a>
              <a href="#" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="font-sans text-xs tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>

        <div className="md:self-end">
          <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-on-surface-variant/60">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
