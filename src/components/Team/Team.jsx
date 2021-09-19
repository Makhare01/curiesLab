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

import { useTranslation } from "react-i18next";


const Team = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar index={props.active} />
      <TeamContainerStyle>
        <TeamTitleStyle> {t("TEAM_CARD_TITLE")} </TeamTitleStyle>
        <TeamCardsDivStyle>
          <TeamCard
            img={profileImg}
            name={t("TEAMMATE_NAME")}
            position={t("TEAMMATE_POSITION")}
            description={t("TEAMMATE_DEPTION")}
            facebook="https://www.facebook.com/marika.tsintsadze02"
            twitter="https://twitter.com/"
            instagram="https://www.instagram.com/"
          />
          <TeamCard
            img={profileImg}
            name={t("TEAMMATE_NAME")}
            position={t("TEAMMATE_POSITION")}
            description={t("TEAMMATE_DEPTION")}
            facebook="https://www.facebook.com/marika.tsintsadze02"
            twitter="https://twitter.com/"
            instagram="https://www.instagram.com/"
          />
          <TeamCard
            img={profileImg}
            name={t("TEAMMATE_NAME")}
            position={t("TEAMMATE_POSITION")}
            description={t("TEAMMATE_DEPTION")}
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
