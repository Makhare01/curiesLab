import React, { Component } from "react";
import NavBar from "./NavBar";
import ContactNavbar from "./ContactNavbar";
import { MainPageContentDivStyle } from "./MainPageContentDiv.style";
import ReactFullpage from "@fullpage/react-fullpage";
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
  // FourthSectionTextStyle,
  FourthSectionButtonStyle,
  FourthSectionButtonLabelStyle,
  FourthSectionImgDivStyle,
  // FourthSectionImgStyle,
} from "./Section.style";

import FirstImg from "../img/first-section-img.png";
import SecondImg from "../img/taxi-science.png";
import ThirdSupportImg from "../img/help.png";
import NewsCarousel from "./NewsCarousel";

class MainPageSwiper extends Component {
  render() {
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
                              <span>იმოგზაურე</span>
                              <span>სამეცნიერო</span>
                              <span>სამყაროში</span>
                            </div>
                          </div>
                        </div>
                        <FirstSectionTextStyle>
                          კიურის ლაბორატორიის მიზანია ბავშვები დაინტერესდნენ
                          STEM საგნებით
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
                          სამეცნიერო ყუთები
                        </SecondSectionTitleStyle>
                        <SecondSectionTextStyle>
                          კიურის ლაბორატორიის სამეცნიერო ყუთებში თქვენ ნახავთ
                          ყველა საჭირო ინვერტარსა და მასალას ექსპერიმენტის
                          ჩასატარებლად
                        </SecondSectionTextStyle>

                        <SecondSectionButtonStyle>
                          <SecondSectionButtonLabelStyle>
                            სამეცნიერო ყუთები
                          </SecondSectionButtonLabelStyle>
                        </SecondSectionButtonStyle>
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
                          მხარდაჭერა
                        </ThirdSectionTitleStyle>
                        <ThirdSectionTextStyle>
                          გახდი ჩვენი სტარტაპის მხარდამჭერი და დაეხმარე პროექტს
                          განვითარებაში
                        </ThirdSectionTextStyle>

                        <ThirdSectionButtonStyle>
                          <a
                            href="https://bit.ly/2TgXrzp"
                            target="Blank"
                            style={{ textDecoration: "none" }}
                          >
                            <ThirdSectionButtonLabelStyle>
                              დაუჭირე მხარი
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
                    <FourthSectionTextDivStyle>
                      <FourthSectionTextAnimationDivStyle className="section-text">
                        <FourthSectionTitleStyle>
                          სიახლეები
                        </FourthSectionTitleStyle>
                        {/* <FourthSectionTextStyle>
                          გახდი ჩვენი სტარტაპის მხარდამჭერი და დაეხმარე პროექტს
                          განვითარებაში
                        </FourthSectionTextStyle> */}

                        <FourthSectionButtonStyle>
                          <FourthSectionButtonLabelStyle>
                            ყველა სიახლე
                          </FourthSectionButtonLabelStyle>
                        </FourthSectionButtonStyle>
                      </FourthSectionTextAnimationDivStyle>
                    </FourthSectionTextDivStyle>

                    <FourthSectionImgDivStyle>
                      {/* <FourthSectionImgStyle
                        className="section-img"
                        src={ThirdSupportImg}
                      /> */}
                      <div className="section-img">
                        <NewsCarousel></NewsCarousel>
                      </div>
                    </FourthSectionImgDivStyle>
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
  }
}

export default MainPageSwiper;