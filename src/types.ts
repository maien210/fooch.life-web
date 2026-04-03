export type Language = 'en' | 'zh-CN' | 'zh-TW';

export interface Translation {
  nav: {
    home: string;
    products: string;
    science: string;
    authority: string;
    clinical: string;
    factory: string;
    language: string;
  };
  hero: {
    subtitle: string;
    title: string;
    titleItalic: string;
    breakthrough: string;
    cta: string;
    scroll: string;
  };
  products: {
    label: string;
    title: string;
    comingSoon: string;
    mallComingSoon: string;
    items: {
      name: string;
      desc: string;
      category: string;
      image: string;
    }[];
  };
  science: {
    label: string;
    title: string;
    mechanism: string;
    seventhNutrient: string;
    items: {
      name: string;
      desc: string;
    }[];
  };
  authority: {
    label: string;
    title: string;
    olympic: string;
    aerospace: string;
    nobel: string;
  };
  clinical: {
    label: string;
    title: string;
    conclusion: string;
    summary: string;
  };
  factory: {
    label: string;
    title: string;
    description: string;
    certifications: string[];
  };
  thesis: {
    title: string;
    cta: string;
    items: {
      journal: string;
      summary: string;
    }[];
  };
  newsletter: {
    title: string;
    desc: string;
    placeholder: string;
    button: string;
  };
  footer: {
    tagline: string;
    navLabel: string;
    infoLabel: string;
    legal: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
}
