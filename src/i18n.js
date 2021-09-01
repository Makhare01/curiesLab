import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      BOXES: "Boxes",
      TEAM: "Team",
      ABOUT_US: "About Us",
      TRAVEL: "TRAVEL TO THE",
      SCIENTIFIC: "SCIENTIFIC",
      WORLD: "WORLD",
      FIRSTPAGETEST:
        "The goal of the Curie Lab is to get kids interested STEM subjects",
    },
  },
  GE: {
    translation: {
      BOXES: "ყუთები",
      TEAM: "გუნდი",
      ABOUT_US: "ჩვენს შესახებ",
      TRAVEL: "იმოგზაურე",
      SCIENTIFIC: "სამეცნიერო",
      WORLD: "სამყაროში",
      FIRSTPAGETEST:
        "კიურის ლაბორატორიის მიზანია ბავშვები დაინტერესდნენ STEM საგნებით",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: `${localStorage.getItem("lang") || "EN"}`,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
