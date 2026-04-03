import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, Translation } from './types';
import { TRANSLATIONS } from './constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const langMap: Record<Language, string> = {
      en: 'en',
      'zh-CN': 'zh-CN',
      'zh-TW': 'zh-TW',
    };

    document.documentElement.lang = langMap[language];
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
