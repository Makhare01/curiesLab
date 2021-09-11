import React from "react";
import NavBar from "./NavBar";
import ContactNavbar from "./ContactNavbar";
import { MainPageContentDivStyle } from "./MainPageContentDiv.style";
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
} from "./Section.style";

import FirstImg from "../img/first-section-img.png";
import SecondImg from "../img/taxi-science.png";
import ThirdSupportImg from "../img/help.png";
import NewsCarousel from "./News/NewsCarousel";
import { useTranslation } from "react-i18next";

const MainPageSwiper = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar></NavBar>
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
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper style={{ border: "solid 1px red" }}>
              <div className="section section-one">
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
                <MainPageContentDivStyle>
                  {/* <FourthSectionTextDivStyle>
                    <FourthSectionTextAnimationDivStyle className="section-text">
                      <FourthSectionTitleStyle>
                        სიახლეები
                      </FourthSectionTitleStyle>
                      <NavLink style={{ textDecoration: "none" }} to="/news">
                        <FourthSectionButtonStyle>
                          <FourthSectionButtonLabelStyle>
                            ყველა სიახლე
                          </FourthSectionButtonLabelStyle>
                        </FourthSectionButtonStyle>
                      </NavLink>
                    </FourthSectionTextAnimationDivStyle>
                  </FourthSectionTextDivStyle> */}
                  <NewsCarousel></NewsCarousel>
                  {/* <FourthSectionImgDivStyle></FourthSectionImgDivStyle> */}
                </MainPageContentDivStyle>
              </div>

              <div className="section section-fifth">
                <MainPageContentDivStyle>
                  <NewsCarousel></NewsCarousel>
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
