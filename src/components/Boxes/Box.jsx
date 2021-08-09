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

const Box = (props) => {
  return (
    <BoxDivStyle>
      <BoxPriceDivStyle />
      <BoxPriceLabelStyle> {props.Price} </BoxPriceLabelStyle>
      <BoxImageStyle src={props.Img} />
      <BoxTitleStyle> {props.Title} </BoxTitleStyle>
      <BoxDescriptionStyle> {props.Description} </BoxDescriptionStyle>
      <BoxButtonStyle>
        <BoxButtonLabelStyle>ყიდვა</BoxButtonLabelStyle>
      </BoxButtonStyle>
    </BoxDivStyle>
  );
};

export default Box;
