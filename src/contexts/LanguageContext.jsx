"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { i18n } from "@/lib/i18n";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "sr") setLangState("sr");
  }, []);

  function setLang(l) {
    setLangState(l);
    localStorage.setItem("portfolio_lang", l);
  }

  function t(path) {
    const keys = path.split(".");
    let val = i18n[lang];
    for (const k of keys) val = val?.[k];
    return typeof val === "string" ? val : path;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
