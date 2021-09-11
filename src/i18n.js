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
      SCIENCE_BOXES: "Science boxes",
      SECONS_SLIDE_TEXT:
        "In the scientific boxes of Curie Lab you will find all the necessary inverters and materials for conducting the experiment",
      SCIENCE_BOXES_LABEL: "Science boxes",
      SUPPORT: "SUPPORT",
      THIRD_SLIDE_TEXT:
        "Become a supporter of our startup and help the project develop",
      SUPPORT_LABEL: "support",
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
      SCIENCE_BOXES: "სამეცნიერო ყუთები",
      SECONS_SLIDE_TEXT:
        "კიურის ლაბორატორიის სამეცნიერო ყუთებში თქვენ ნახავთ ყველა საჭირო ინვერტარსა და მასალას ექსპერიმენტის ჩასატარებლად",
      SCIENCE_BOXES_LABEL: "სამეცნიერო ყუთები",
      SUPPORT: "მხარდაჭერა",
      THIRD_SLIDE_TEXT:
        "გახდი ჩვენი სტარტაპის მხარდამჭერი და დაეხმარე პროექტს განვითარებაში",
      SUPPORT_LABEL: "დაუჭირე მხარი",
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
