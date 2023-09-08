import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      "player" : "Oyuncu",
      "hello" : "Merhabalar",
      "homepage" : "Ana Sayfa",
      "about" : "Hakkımızda",
    }
  },
  en: {
    translation: {
      "player" : "Player",
      "hello" : "Hello",
      "homepage" : "Home Page",
      "about" : "About",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    },
    fallbackLng: "en",
    keySeperator: false,
    react: {
        wait: true
    }
  });

  export default i18n;