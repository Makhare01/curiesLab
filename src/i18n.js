import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      BOXES: "Boxes",
      NEWS_NAVLINK: "News",
      TEAM: "Team",
      ABOUT_US_NAVLINK: "About Us",
      TRAVEL: "TRAVEL TO THE",
      SCIENTIFIC: "SCIENTIFIC",
      WORLD: "WORLD",
      FIRSTPAGETEST:
        "The goal of the Curie Lab is to get kids interested STEM subjects",
      SCIENCE_BOXES: "Science boxes",
      SECONS_SLIDE_TEXT:
        "In the scientific boxes of Curie Lab you will find all the necessary inverters and materials for conducting the experiment",
      SCIENCE_BOXES_LABEL: "SCIENCE BOXES",
      SUPPORT: "SUPPORT",
      THIRD_SLIDE_TEXT:
        "Become a supporter of our startup and help the project develop",
      SUPPORT_LABEL: "SUPPORT",
      NEWS: "NEWS",
      NEWS_SLIDE_TEXT:
        "Find out all the news about Curie Labs",
      NEWS_LABEL: "ALL NEWS",
      ABOUT_US: "ABOUT US",
      ABOUT_US_DESCRIPTION: "We are two novice scientists Marika and Nino who want kids to love science as much as we do. All our childhood we dreamed of wearing white coats, putting our fingers in gloves and immersing ourselves in the magical world of science, conducting amazing, stunning and eye-catching experiments that we could not see on the computer screen via the Internet, but we could not do it. To this day, many children do not have the spark of joy that comes from conducting a tiny experiment, so we decided to create science boxes that will set up a laboratory for children at home.",
      ABOUT_US_BUTTON_LABEL: "SEE MORE",
      TEAM_CARD_TITLE: "TEAM",
      TEAMMATE_NAME: "Marika Tsintsadze",
      TEAMMATE_POSITION: "CEO",
      TEAMMATE_DEPTION: "The generated LOREM IPSUM is never repetitive, containing random words or jokes.",

    },
  },
  GE: {
    translation: {
      BOXES: "ყუთები",
      NEWS_NAVLINK: "სიახლეები",
      TEAM: "გუნდი",
      ABOUT_US_NAVLINK: "ჩვენს შესახებ",
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
      NEWS: "სიახლეები",
      NEWS_SLIDE_TEXT:
        "გაიგეთ ყველა სიახლე კიურის ლაბორატორიასთან დაკავშირებით",
      NEWS_LABEL: "ყველა სიახლე",
      ABOUT_US: "ჩვენს შესახებ",
      ABOUT_US_DESCRIPTION: "ჩვენ ვართ ორი დამწყები მეცნიერი მარიკა და ნინო, რომლებსაც გვსურს ბავშვებს ისევე შეუყვარდეთ მეცნიერება როგორც ჩვენ. მთელი ბავშვობა ვოცნებობდით მოგვესხა თეთრი ხალთები, ხელთამანებში თითები შეგვეცურებინა და მეცნიერების ჯადოსნური სამყაროში შეგვებიჯებინა, საოცარი, გამაოგნებელი და თვალწარმტაცი ექსპერიმენტები ჩაგვეტარებინა, რომლებსაც ინტერნეტის საშუალებით კომპიუტერის ეკრანზე ვუცქერდით, მაგრამ ეს ოცნება ვერ აგვიხდა, რადგან ჩვენს სკოლებს ამის რესურსები არ ჰქონდა. დღემდე ბევრი ბავშვის თვალებში არ ანთებულა ის სიხარულის ნაპერწკალი, რომლსაც პაწაწო ექსპერიმენტის ჩატარება იწვევს, ამიტომაც გადვწყვიტეთ შეგვექმნა სამეცნიერო ყუთები, რომლებიც ბავშვებს სახლშივე შეუქმნის ლაბორატორიას.",
      ABOUT_US_BUTTON_LABEL: "მეტის ნახვა",
      TEAM_CARD_TITLE: "გუნდი",
      TEAMMATE_NAME: "მარიკა ცინცაძე",
      TEAMMATE_POSITION: "აღმასრულებელი დირექტორი",
      TEAMMATE_DEPTION: "გენერირებული LOREM IPSUM არასოდეს არ არის გამეორებადი, შემთხვევითი სიტყვების ან ხუმრობების შემცველი.",
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
