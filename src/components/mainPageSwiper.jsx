import React from "react";
import NavBar from "./NavBar";
import ContactNavbar from "./ContactNavbar";
import { MainPageContentDivStyle } from "./MainPageContentDiv.style";
// @ts-ignore
import ReactFullpage from "@fullpage/react-fullpage";
import { NavLink } from "react-router-dom";
import {
  FirstSectionTextDivStyle,
  FirstSectionTextAnimationDivStyle,
  FirstSectionTextStyle,
  FirstSectionImgDivStyle,
  FirstSectionImgStyle,
  // --------------------------
  SecondSectionTextDivStyle,
  SecondSectionTextAnimationDivStyle,
  SecondSectionTitleStyle,
  SecondSectionTextStyle,
  SecondSectionButtonStyle,
  SecondSectionButtonLabelStyle,
  SecondSectionImgDivStyle,
  SecondSectionImgStyle,
  // --------------------------
  ThirdSectionTextDivStyle,
  ThirdSectionTextAnimationDivStyle,
  ThirdSectionTitleStyle,
  ThirdSectionTextStyle,
  ThirdSectionButtonStyle,
  ThirdSectionButtonLabelStyle,
  ThirdSectionImgDivStyle,
  ThirdSectionImgStyle,
  // --------------------------
  FourthSectionTextDivStyle,
  FourthSectionTextAnimationDivStyle,
  FourthSectionTitleStyle,
  FourthSectionTextStyle,
  FourthSectionButtonStyle,
  FourthSectionButtonLabelStyle,
  FourthSectionImgDivStyle,
  FourthSectionImgStyle,
  // ---------------------------
  FifthSectionDivStyle,
  FifthSectionContentDivStyle,
  FifthSectionContentTitleStyle,
  FifthSectionContentSubDivStyle,
  FifthSectionContentListStyle,
  FifthSectionContentListItemLeftStyle
} from "./Section.style";

// @ts-ignore
import FirstImg from "../img/first-section-img.png";
// @ts-ignore
import SecondImg from "../img/taxi-science.png";
// @ts-ignore
import ThirdSupportImg from "../img/help.png";
// @ts-ignore
import NewsImage from "../img/news.png"
// @ts-ignore
import bgImage from "../img/Background-shapes-grey.svg"
// @ts-ignore
import BubbleImg from "../img/Bubble.png"
// @ts-ignore
import BouncedImg from "../img/chemistry.png"
// @ts-ignore
import BoxBouncedImg from "../img/purr-box.png"
// @ts-ignore
import FlaskImg from "../img/flask.png"
// @ts-ignore
import AtomImg from "../img/atom.png"
// import NewsCarousel from "./News/NewsCarousel";
import { useTranslation } from "react-i18next";
import NeedHelp from "./Help/NeedHelp"
import Bounced from "./Animation/Bounced"

// Swiper


const MainPageSwiper = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar></NavBar>
      <NeedHelp />
      <ReactFullpage
        scrollingSpeed={1000}
        sectionsColor={["#D1EAEF", "#D1EAEF", "#D1EAEF"]}
        navigation={true}
        navigationPosition={"left"}
        navigationColors={"red"}
        scrollBar={false}
        dragAndMove={true}
        waterEffect={false}
        slidesNavigation={true}
        slidesNavPosition={"bottom"}
        verticalCentered={true}
        // @ts-ignore
        render={({ state, fullpageApi }) => {
          <img alt="background shapes" className="background-shapes-img" src={bgImage} />
          return (
            <ReactFullpage.Wrapper>
              <div className="section section-one">
                {/* <img className="background-shapes-img" src={bgImage} /> */}
                <MainPageContentDivStyle>
                  <FirstSectionTextDivStyle>
                    <FirstSectionTextAnimationDivStyle className="section-text">
                      <div className="animated-title">
                        <div className="text-top">
                          <div>
                            <span>{t("TRAVEL")}</span>
                            <span>{t("SCIENTIFIC")}</span>
                            <span>{t("WORLD")}</span>
                          </div>
                        </div>
                      </div>
                      <FirstSectionTextStyle>
                        {t("FIRSTPAGETEST")}
                      </FirstSectionTextStyle>
                    </FirstSectionTextAnimationDivStyle>
                  </FirstSectionTextDivStyle>
                  <FirstSectionImgDivStyle>
                    <FirstSectionImgStyle
                      className="section-img"
                      src={FirstImg}
                    />
                  </FirstSectionImgDivStyle>
                </MainPageContentDivStyle>
              </div>

              <div className="section section-two">
                {/* <img className="background-shapes-img" src={bgImage} /> */}
                <Bounced text="ყუთებიიი" img1={BubbleImg} img2={BoxBouncedImg} leftPos={15} rightPos={null} bottomPos={70} topPos={null} />
                <MainPageContentDivStyle>
                  <SecondSectionTextDivStyle>
                    <SecondSectionTextAnimationDivStyle className="section-text">
                      <SecondSectionTitleStyle>
                        {t("SCIENCE_BOXES")}
                      </SecondSectionTitleStyle>
                      <SecondSectionTextStyle>
                        {t("SECONS_SLIDE_TEXT")}
                      </SecondSectionTextStyle>
                      <NavLink style={{ textDecoration: "none" }} to="/boxes">
                        <SecondSectionButtonStyle>
                          <SecondSectionButtonLabelStyle>
                            {t("SCIENCE_BOXES_LABEL")}
                          </SecondSectionButtonLabelStyle>
                        </SecondSectionButtonStyle>
                      </NavLink>
                    </SecondSectionTextAnimationDivStyle>
                  </SecondSectionTextDivStyle>

                  <SecondSectionImgDivStyle>
                    <SecondSectionImgStyle
                      className="section-img"
                      src={SecondImg}
                    />
                  </SecondSectionImgDivStyle>
                </MainPageContentDivStyle>
              </div>

              <div className="section section-three">
                {/* <img className="background-shapes-img" src={bgImage} /> */}
                <MainPageContentDivStyle>
                  <ThirdSectionTextDivStyle>
                    <ThirdSectionTextAnimationDivStyle className="section-text">
                      <ThirdSectionTitleStyle>
                        {t("SUPPORT")}
                      </ThirdSectionTitleStyle>
                      <ThirdSectionTextStyle>
                        {t("THIRD_SLIDE_TEXT")}
                      </ThirdSectionTextStyle>

                      <ThirdSectionButtonStyle>
                        <a
                          href="https://bit.ly/2TgXrzp"
                          target="Blank"
                          style={{ textDecoration: "none" }}
                        >
                          <ThirdSectionButtonLabelStyle>
                            {t("SUPPORT_LABEL")}
                          </ThirdSectionButtonLabelStyle>
                        </a>
                      </ThirdSectionButtonStyle>
                    </ThirdSectionTextAnimationDivStyle>
                  </ThirdSectionTextDivStyle>

                  <ThirdSectionImgDivStyle>
                    <ThirdSectionImgStyle
                      className="section-img"
                      src={ThirdSupportImg}
                    />
                  </ThirdSectionImgDivStyle>
                </MainPageContentDivStyle>
              </div>

              <div className="section section-fourth">
                {/* <img className="background-shapes-img" src={bgImage} /> */}
                <MainPageContentDivStyle>
                  <FourthSectionTextDivStyle>
                    <FourthSectionTextAnimationDivStyle className="section-text">
                      <FourthSectionTitleStyle>
                        {t("NEWS")}
                      </FourthSectionTitleStyle>
                      <FourthSectionTextStyle>
                        {t("NEWS_SLIDE_TEXT")}
                      </FourthSectionTextStyle>
                      <NavLink style={{ textDecoration: "none" }} to="/news">
                        <FourthSectionButtonStyle>
                          <FourthSectionButtonLabelStyle>
                            {t("NEWS_LABEL")}
                          </FourthSectionButtonLabelStyle>
                        </FourthSectionButtonStyle>
                      </NavLink>
                    </FourthSectionTextAnimationDivStyle>
                  </FourthSectionTextDivStyle>
                  <FourthSectionImgDivStyle>
                    <FourthSectionImgStyle className="section-img" src={NewsImage} />
                  </FourthSectionImgDivStyle>
                </MainPageContentDivStyle>
              </div>

              <div className="section section-fifth">
                <MainPageContentDivStyle>
                  {/* <NewsCarousel /> */}
                  <Bounced text="Hello!" img1={BubbleImg} img2={BouncedImg} leftPos={10} rightPos={null} bottomPos={40} topPos={null} />
                  <Bounced text="Thanks!" img1={BubbleImg} img2={FlaskImg} leftPos={null} rightPos={10} bottomPos={70} topPos={null} />
                  <Bounced text="Athomm!" img1={BubbleImg} img2={AtomImg} leftPos={null} rightPos={20} bottomPos={10} topPos={null} />
                  <FifthSectionDivStyle>
                    <FifthSectionContentDivStyle>
                      <FifthSectionContentTitleStyle>Thank you very much!</FifthSectionContentTitleStyle>
                      <FifthSectionContentSubDivStyle>
                        <FifthSectionContentListStyle>
                          <FifthSectionContentListItemLeftStyle>How it works</FifthSectionContentListItemLeftStyle>
                          <FifthSectionContentListItemLeftStyle>Cards</FifthSectionContentListItemLeftStyle>
                          <FifthSectionContentListItemLeftStyle>News</FifthSectionContentListItemLeftStyle>
                          <FifthSectionContentListItemLeftStyle>Team</FifthSectionContentListItemLeftStyle>
                          <FifthSectionContentListItemLeftStyle>About us</FifthSectionContentListItemLeftStyle>
                        </FifthSectionContentListStyle>
                        <FifthSectionContentListStyle>
                          <FifthSectionContentListItemLeftStyle>Boxes</FifthSectionContentListItemLeftStyle>
                          <FifthSectionContentListItemLeftStyle>Contact</FifthSectionContentListItemLeftStyle>
                          <FifthSectionContentListItemLeftStyle>Legal terms</FifthSectionContentListItemLeftStyle>
                        </FifthSectionContentListStyle>
                      </FifthSectionContentSubDivStyle>
                    </FifthSectionContentDivStyle>
                  </FifthSectionDivStyle>
                </MainPageContentDivStyle>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      <ContactNavbar></ContactNavbar>
    </>
  );
};

export default MainPageSwiper;
