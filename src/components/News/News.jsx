import React from "react";

import {
  NewsCardDivStyle,
  //   ------- Left
  NewsCardLeftDivStyle,
  NewsCardLeftInsideDivStyle,
  NewsCardLeftInsideDescriptionDivStyle,
  NewsCardLeftTitleStyle,
  NewsCardDescriptionStyle,
  NewsCardreadMoreButtonStyle,
  NewsCardReadMoreLabelStyle,
  //   ------- Right
  NewsCardRightDivStyle,
  NewsCardRightImgStyle,
} from "./NewsStyle";

import news1 from "../../img/news1.png";

const News = ({ title, description }) => {
  return (
    <div className="slide">
      <NewsCardDivStyle>
        <NewsCardLeftDivStyle>
          <NewsCardLeftInsideDivStyle>
            <NewsCardLeftTitleStyle> {title} </NewsCardLeftTitleStyle>
            <NewsCardDescriptionStyle>
              <NewsCardLeftInsideDescriptionDivStyle>
                {description}
              </NewsCardLeftInsideDescriptionDivStyle>
            </NewsCardDescriptionStyle>
            <NewsCardreadMoreButtonStyle>
              <NewsCardReadMoreLabelStyle>მეტის ნახვა</NewsCardReadMoreLabelStyle>
            </NewsCardreadMoreButtonStyle>
          </NewsCardLeftInsideDivStyle>
        </NewsCardLeftDivStyle>
        {/* ----------------------------------- */}
        <NewsCardRightDivStyle>
          <NewsCardRightImgStyle src={news1} />
        </NewsCardRightDivStyle>
      </NewsCardDivStyle>
    </div>
  );
};

export default News;
