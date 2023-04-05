import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          titre: "THIS IS A MULTILANGUAGE TEST",
          installation: "Install the following packages :",
          subTitle: "For a technological work.",
        },
      },
      fr: {
        translation: {
          titre: "CECI EST UN TEST MULTILANGUES",
          installation: "Installer les packages suivants :",
          subTitle: "Pour une veille technologique.",
        },
      },
    },
  });
