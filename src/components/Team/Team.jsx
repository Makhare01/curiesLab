import React from "react";
import NavBar from "../NavBar";
import ContactNavbar from "./../ContactNavbar";
import profileImg from "../../img/profile-img.png";
import TeamCard from "./TeamCard";

import {
  TeamCardsDivStyle,
  TeamContainerStyle,
  TeamTitleStyle,
} from "./Team.style";

const Team = (props) => {
  return (
    <>
      <NavBar index={props.active} />
      <TeamContainerStyle>
        <TeamTitleStyle>გუნდი</TeamTitleStyle>
        <TeamCardsDivStyle>
          <TeamCard
            img={profileImg}
            name={"მარიკა ცინცაძე"}
            position="აღმასრულებელი დირექტორი"
            description="გენერირებული LOREM IPSUM არასოდეს 
            არ არის გამეორებადი, შემთხვევითი 
            სიტყვების ან ხუმრობების შემცველი."
            facebook="https://www.facebook.com/marika.tsintsadze02"
            twitter="https://twitter.com/"
            instagram="https://www.instagram.com/"
          />
          <TeamCard
            img={profileImg}
            name={"მარიკა ცინცაძე"}
            position="აღმასრულებელი დირექტორი"
            description="გენერირებული LOREM IPSUM არასოდეს 
            არ არის გამეორებადი, შემთხვევითი 
            სიტყვების ან ხუმრობების შემცველი."
            facebook="https://www.facebook.com/marika.tsintsadze02"
            twitter="https://twitter.com/"
            instagram="https://www.instagram.com/"
          />
          <TeamCard
            img={profileImg}
            name={"მარიკა ცინცაძე"}
            position="აღმასრულებელი დირექტორი"
            description="გენერირებული LOREM IPSUM არასოდეს 
            არ არის გამეორებადი, შემთხვევითი 
            სიტყვების ან ხუმრობების შემცველი."
            facebook="https://www.facebook.com/marika.tsintsadze02"
            twitter="https://twitter.com/"
            instagram="https://www.instagram.com/"
          />
        </TeamCardsDivStyle>
      </TeamContainerStyle>
      <ContactNavbar />
    </>
  );
};

export default Team;
