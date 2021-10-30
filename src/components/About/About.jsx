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
// @ts-ignore
import aboutUsImg from "../../img/about.png";
import { useTranslation } from "react-i18next";


const About = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar index={props.active}></NavBar>
      <AboutContainerStyle>
        <AboutTextDivStyle>
          <AboutUsTextSubDivStyle>
            <AboutUsTitleStyle> {t("ABOUT_US")} </AboutUsTitleStyle>
            <AboutUsDescriptionStyle> {t("ABOUT_US_DESCRIPTION")} </AboutUsDescriptionStyle>
            <AboutUsButtonStyle>
              <a href="https://www.facebook.com/curieslaboratory/" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                <AboutUsButtonLabelStyle> {t("ABOUT_US_BUTTON_LABEL")} </AboutUsButtonLabelStyle>
              </a>
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
