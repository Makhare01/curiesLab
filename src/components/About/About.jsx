import React from "react";
import NavBar from "../NavBar";
import ContactNavbar from "./../ContactNavbar";

// Style
import {
  AboutContainerStyle,
  AboutTextDivStyle,
  AboutUsTextSubDivStyle,
  AboutUsTitleStyle,
  AboutUsDescriptionStyle,
  AboutUsButtonStyle,
  AboutUsButtonLabelStyle,
  // -------------------------------
  AboutImageDivStyle,
  AboutUsImgStyle,
} from "./About.style";

// Images
import aboutUsImg from "../../img/about.png";

const About = (props) => {
  return (
    <>
      <NavBar index={props.active}></NavBar>
      <AboutContainerStyle>
        <AboutTextDivStyle>
          <AboutUsTextSubDivStyle>
            <AboutUsTitleStyle>ჩვენს შესახებ</AboutUsTitleStyle>
            <AboutUsDescriptionStyle>
              ჩვენ ვართ ორი დამწყები მეცნიერი მარიკა და ნინო, რომლებსაც გვსურს
              ბავშვებს ისევე შეუყვარდეთ მეცნიერება როგორც ჩვენ. მთელი ბავშვობა
              ვოცნებობდით მოგვესხა თეთრი ხალთები, ხელთამანებში თითები
              შეგვეცურებინა და მეცნიერების ჯადოსნური სამყაროში შეგვებიჯებინა,
              საოცარი, გამაოგნებელი და თვალწარმტაცი ექსპერიმენტები
              ჩაგვეტარებინა, რომლებსაც ინტერნეტის საშუალებით კომპიუტერის ეკრანზე
              ვუცქერდით, მაგრამ ეს ოცნება ვერ აგვიხდა, რადგან ჩვენს სკოლებს ამის
              რესურსები არ ჰქონდა. დღემდე ბევრი ბავშვის თვალებში არ ანთებულა ის
              სიხარულის ნაპერწკალი, რომლსაც პაწაწო ექსპერიმენტის ჩატარება
              იწვევს, ამიტომაც გადვწყვიტეთ შეგვექმნა სამეცნიერო ყუთები, რომლებიც
              ბავშვებს სახლშივე შეუქმნის ლაბორატორიას.
            </AboutUsDescriptionStyle>
            <AboutUsButtonStyle>
              <AboutUsButtonLabelStyle>მეტის ნახვა</AboutUsButtonLabelStyle>
            </AboutUsButtonStyle>
          </AboutUsTextSubDivStyle>
        </AboutTextDivStyle>
        <AboutImageDivStyle>
          <AboutUsImgStyle src={aboutUsImg} />
        </AboutImageDivStyle>
      </AboutContainerStyle>
      <ContactNavbar></ContactNavbar>
    </>
  );
};

export default About;
