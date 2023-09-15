import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      "player" : "Oyuncu",
      "hello" : "Merhabalar",
      "homepage" : "Ana Sayfa",
      "about" : "Hakkımızda",
      "playername" : "Adı - Soyadı",
      "playershoesize" : "Ayakkabı Numarası",
      "playerteam" : "Takım",
      "playerisactive" : "Aktiflik Durumu",
      "playerupdate" : "Güncelle",
      "playerview" : "Göster",
      "playerdelete" : "Sil",
      "playerlist" : "Oyuncu Listesi",
      "playeralldelete" : "Tüm Oyuncuları Sil",
      "addplayer" : "Oyuncu Ekle",
      "isread" : "Sözleşmeyi okudum.",
      "reset" : "Temizle",
      "memberprocess" : "Üyelik İşlemleri",
      "login" : "Giriş",
      "register" : "Kayıt",
    }
  },
  en: {
    translation: {
      "player" : "Player",
      "hello" : "Hello",
      "homepage" : "Home Page",
      "about" : "About",
      "playername" : "FullName",
      "playershoesize" : "Shoe Size",
      "playerteam" : "Team",
      "playerisactive" : "İs Active",
      "playerupdate" : "Update",
      "playerview" : "View",
      "playerdelete" : "Delete",
      "playerlist" : "Player List",
      "playeralldelete" : "Delete All Player",
      "addplayer" : "Add Player",
      "isread" : "I read contract.",
      "reset" : "Reset",
      "memberprocess" : "Member Process",
      "login" : "Login",
      "register" : "Register",
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