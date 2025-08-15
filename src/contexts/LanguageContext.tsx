import React, { createContext, useContext, useState, useEffect } from 'react';

import fr from './fr.json';
import en from './en.json';

interface LanguageContextType {
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
  t: (key: string) => string | any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: { fr: Record<string, any>; en: Record<string, any> } = {
  fr,
  en,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "fr" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: "fr" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string | any => {
    const translation = translations[language][key];
    if (translation) {
      // Handle dynamic values like {year}
      if (typeof translation === "string" && translation.includes("{year}")) {
        return translation.replace(
          "{year}",
          new Date().getFullYear().toString()
        );
      }
      // Return arrays and objects as-is, only join string arrays
      if (
        Array.isArray(translation) &&
        translation.every((item) => typeof item === "string")
      ) {
        return translation.join(", ");
      }
      return translation;
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
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