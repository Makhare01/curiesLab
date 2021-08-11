import React from "react";

import {
  TeamCardDivStyle,
  TeamCardImgStyle,
  TeamCardNameStyle,
  TeamCardPositionTextStyle,
  TeamCardDescriptionStyle,
  TeamCardSocialDivStyle,
  TeamCardSocialIconStyle,
} from "./Team.style";

const TeamCard = (props) => {
  return (
    <TeamCardDivStyle>
      <TeamCardImgStyle src={props.img} />
      <TeamCardNameStyle> {props.name} </TeamCardNameStyle>
      <TeamCardPositionTextStyle> {props.position} </TeamCardPositionTextStyle>
      <TeamCardDescriptionStyle> {props.description} </TeamCardDescriptionStyle>
      <TeamCardSocialDivStyle>
        <a href={props.facebook} target="_blank" rel="noreferrer">
          <TeamCardSocialIconStyle className="fab fa-facebook-square" />
        </a>
        <a href={props.twitter} target="_blank" rel="noreferrer">
          <TeamCardSocialIconStyle className="fab fa-twitter" />
        </a>
        <a href={props.instagram} target="_blank" rel="noreferrer">
          <TeamCardSocialIconStyle className="fab fa-instagram" />
        </a>
      </TeamCardSocialDivStyle>
    </TeamCardDivStyle>
  );
};

export default TeamCard;
