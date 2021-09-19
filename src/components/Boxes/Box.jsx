import React from "react";
// import { ProgressPlugin } from "webpack";
import {
  BoxDivStyle,
  BoxPriceLabelStyle,
  BoxPriceDivStyle,
  BoxImageStyle,
  BoxTitleStyle,
  BoxDescriptionStyle,
  BoxButtonStyle,
  BoxButtonLabelStyle,
} from "./Box.style";

const Box = ({ Price, Img, Title, Description }) => {
  console.log(Img);
  return (
    <BoxDivStyle>
      <BoxPriceDivStyle />
      <BoxPriceLabelStyle> {Price} </BoxPriceLabelStyle>
      <BoxImageStyle src={Img} alt="box image" />
      <BoxTitleStyle> {Title} </BoxTitleStyle>
      <BoxDescriptionStyle> {Description} </BoxDescriptionStyle>
      <BoxButtonStyle>
        <BoxButtonLabelStyle>ყიდვა</BoxButtonLabelStyle>
      </BoxButtonStyle>
    </BoxDivStyle>
  );
};

export default Box;
